import { AiOutlineClose } from "react-icons/ai";
import { ModalType,FormType } from "@/Types/useTypes";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"; 
import { validationSchema } from "../schema/formSchema"; 
import { useEffect, useState } from "react";

import { useFirebase } from '@/context/dataContext';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from "@/db/configFirebase";



const AddEditForm = ({ onClose, openModal, isUpdate, member }: ModalType) => {

  const [file, setFile] = useState<File | undefined>();

  const {updateMember, addMember} = useFirebase()

  const { handleSubmit ,register,reset, formState: { errors }, setValue  } = useForm<FormType>({
    resolver: yupResolver(validationSchema),
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    setFile(selectedFile);
  };
  

  useEffect(() => {
    if (isUpdate && member) {
      // Définir les valeurs du formulaire avec les données du membre
      reset(member);
    }
  }, [isUpdate, member, reset]);

  const onSubmit: SubmitHandler<FormType> = async (formData) => {
    try {
      let imageUrl = ''; // Initialiser l'URL de l'image 
      if (file) {
        // Télécharger la nouvelle image vers Firebase Storage
        const imageRef = ref(storage, `profileImages/${file.name}`);
        await uploadBytes(imageRef, file);
        // Récupérer l'URL de téléchargement de la nouvelle image
        imageUrl = await getDownloadURL(imageRef);
      } else {
        // Utiliser l'ancienne URL de l'image si aucune nouvelle image n'a été sélectionnée
        imageUrl = member?.image || '';
      }
      if (isUpdate && member) {
        // Mettre à jour le membre avec l'URL de l'image
        updateMember({ ...formData, id: member.id, image: imageUrl });
      } else {
        // Ajouter un nouveau membre avec l'URL de l'image
        addMember({ ...formData, image: imageUrl });
      }
      // Fermer le modal après la soumission du formulaire
      onClose();
    } catch (error) {
      console.error('Erreur lors de la soumission du formulaire:', error);
    }
  };
  
  

  return (
    <>
      {openModal && (
        <div className="absolute top-0 left-0 z-40 grid h-screen w-full place-items-center backdrop-blur">
          <div className="max-w-[700px]  relative z-50 m-auto min-h-[200px]  bg-white p-4 shadow-lg border border-gray-800 rounded ">
            <div className="flex justify-end">
              <AiOutlineClose onClick={onClose} className="self-end text-2xl cursor-pointer" />
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-1">
              <label htmlFor="lastName">Nom :</label>
              <input {...register("lastName")} id="lastName" className="border border-gray-300 p-2 rounded-md"/>
              {errors.lastName && <span className="text-red-500">{errors.lastName.message}</span>}

              <label htmlFor="firstName">Prénom :</label>
              <input {...register("firstName")} id="firstName" className="border border-gray-300 p-2 rounded-md"/>
              {errors.firstName && <span className="text-red-500">{errors.firstName.message}</span>}

              <label htmlFor="email">Email :</label>
              <input {...register("email")} id="email" className="border border-gray-300 p-2 rounded-md"/>
              {errors.email && <span className="text-red-500">{errors.email.message}</span>}

              <label htmlFor="phone">Téléphone :</label>
              <input {...register("phone")} id="phone" className="border border-gray-300 p-2 rounded-md"/>
              {errors.phone && <span className="text-red-500">{errors.phone.message}</span>}

              <label htmlFor="image">Image :</label>
              <input 
              type="file"
               accept="image/gif, image/jpeg, image/png, image/webp"
               onChange={handleChange}
               id="image" 
               className="border border-gray-300 p-2 rounded-md"/>
              {errors.image && <span className="text-red-500">{errors.image.message}</span>}
              

              <label htmlFor="adress">Adresse :</label>
              <input {...register("adress")} id="adress" className="border border-gray-300 p-2 rounded-md"/>
              {errors.adress && <span className="text-red-500">{errors.adress.message}</span>}

              <label htmlFor="cp">Code postal :</label>
              <input {...register("cp")} id="cp" className="border border-gray-300 p-2 rounded-md" />
              {errors.cp && <span className="text-red-500">{errors.cp.message}</span>}

              <label htmlFor="city">Ville :</label>
              <input {...register("city")} id="city" className="border border-gray-300 p-2 rounded-md"/>
              {errors.city && <span className="text-red-500">{errors.city.message}</span>}

              <label htmlFor="country">Pays :</label>
              <input {...register("country")} id="country" className="border border-gray-300 p-2 rounded-md"/>
              {errors.country && <span className="text-red-500">{errors.country.message}</span>}

              <button className="text-white bg-gray-700 hover:bg-gray-900 rounded-md p-3" type="submit">
              {isUpdate ? 'Modifier le' : "Ajouter un"} membre
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AddEditForm;
