"use client"
import DataTab from '../components/DataTab';
import useModal from '../hooks/useModal';
import  Form  from '../components/Form';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaPlus } from "react-icons/fa";
import { useFirebase } from '@/context/dataContext';


export default function Home() {

  const { members  } = useFirebase();
  const {openModal, onClose, onOpen} = useModal();

  return (
    <>
      <div className="mx-auto max-w-[1200px] px-4 py-5 flex justify-center flex-col items-center">

        <ToastContainer/>

        <button onClick={onOpen} className=" p-2 rounded-full hover:bg-gray-200 text-gray-800 mb-5 flex items-center gap-2">
          <FaPlus/>
          <span>Ajouter un membre</span>
        </button>

        <DataTab  />
        <Form  openModal={openModal} onClose={onClose} isUpdate={false}  />
        
      </div>
    </>
  );
}
