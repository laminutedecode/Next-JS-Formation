"use client"
import { createContext, useContext, useEffect, useState } from 'react';
import { collection, onSnapshot, addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from '../db/configFirebase';
import { DataType, DbContextType } from '@/Types/useTypes';
import { toast } from "react-toastify";

const MembersContext = createContext<DbContextType | null>(null);

export const useFirebase = () => {
  
  const context = useContext(MembersContext);
  if (!context) {
    throw new Error('useFirebase must be used within a FirebaseProvider');
  }
  return context;
};

export const MembersProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  
  const [members, setMembers] = useState<DataType[]>([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'members'), (snapshot) => {
      const membersData: DataType[] = [];
      snapshot.forEach((doc) => {
        membersData.push({ id: doc.id, ...doc.data() } as DataType);
      });
      setMembers(membersData);
    });
    return () => unsubscribe();
  }, []);

  const addMember = async (membersData: Omit<DataType, 'id'> & { image: string }) => {
    try {
      // Ajouter le membre avec l'URL de l'image à Firestore
      const docRef = await addDoc(collection(db, 'members'), membersData);
      const newContact: DataType = { id: docRef.id, ...membersData };
      setMembers([...members, newContact]);
      toast.success('Membre ajouté')
    } catch (error) {
      console.error('Erreur lors de la création de membre:', error);
      throw new Error('Erreur lors de la création de membre');
    }
  };

  const updateMember = async (member: DataType) => {
    try {
      // Mettre à jour le document Firestore avec les nouvelles données
      const memberRef = doc(db, 'members', member.id);
      await updateDoc(memberRef, member);
      // Mettre à jour l'état des membres
      setMembers(members.map((m) => (m.id === member.id ? { ...m, ...member } : m)));
      toast.success('Membre modifié')
    } catch (error) {
      console.error('Erreur lors de la modification du membre:', error);
      throw new Error('Erreur lors de la modification du membre');
    }
  };

  const deleteMember = async (id: string) => {
    try {
      // Supprimer le document Firestore
      await deleteDoc(doc(db, 'members', id));
      // Mettre à jour l'état des membres
      setMembers(members.filter((member) => member.id !== id));
      toast.success('Membre supprimé')
    } catch (error) {
      console.error('Erreurs lors de la suppression', error);
      throw new Error('Erreurs lors de la suppression');
    }
  };
  
  

  const value = {
    members,
    addMember,
    updateMember,
    deleteMember,
  };

  return <MembersContext.Provider value={value}>{children}</MembersContext.Provider>;
};