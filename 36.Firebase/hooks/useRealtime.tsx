import { useState, useEffect } from 'react';
import { database } from '@/db/configFirebase';
import { ref, push, remove, onValue, update } from 'firebase/database';

interface Preference {
  id: string;
  language: string;
}

export function useRealtime() {
  const [preferences, setPreferences] = useState<Preference[]>([]);
  const [editingPreference, setEditingPreference] = useState<Preference | null>(null);

  useEffect(() => {
    const preferencesRef = ref(database, 'preferences');

    const onDataChange = (snapshot: any) => {
      const preferencesList: Preference[] = [];
      snapshot.forEach((childSnapshot: any) => {
        const preference = childSnapshot.val();
        preference.id = childSnapshot.key;
        preferencesList.push(preference);
      });
      setPreferences(preferencesList);
    };

    const preferencesListener = onValue(preferencesRef, onDataChange);

    return () => {
      // Retirer l'écouteur lorsque le composant est démonté
      preferencesListener(); 
    };
  }, []);

  const addPreference = async (language: string) => {
    try {
      const preferencesRef = ref(database, 'preferences');
      await push(preferencesRef, {
        language: language
      });
    } catch (error) {
      console.error('Error adding data to Firebase Realtime Database:', error);
    }
  };

  const deletePreference = async (id: string) => {
    try {
      await remove(ref(database, `preferences/${id}`));
    } catch (error) {
      console.error('Error deleting record:', error);
    }
  };

  const updatePreference = async (id: string, newLanguage: string) => {
    try {
      await update(ref(database, `preferences/${id}`), {
        language: newLanguage
      });
      setEditingPreference(null);
    } catch (error) {
      console.error('Error updating record:', error);
    }
  };

  const startEditingPreference = (preference: Preference) => {
    setEditingPreference(preference);
  };

  return {
    preferences,
    addPreference,
    deletePreference,
    updatePreference,
    editingPreference,
    startEditingPreference
  };
}
