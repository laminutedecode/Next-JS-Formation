import { FaPenFancy } from "react-icons/fa";
import { IoMdTrash } from 'react-icons/io';
import useModal from '@/hooks/useModal';
import Form from '../components/Form';
import { useFirebase } from '../context/dataContext';
import { DataType } from '@/Types/useTypes';

export default function DataItems({ member }: { member: DataType }) {

  const { openModal, onClose, onOpen } = useModal();
  const { deleteMember } = useFirebase(); 


  return (
      <tr>
      <td className="p-3 text-sm border">{member.id}</td>
      <td className="p-3 text-sm border"><img src={member.image} alt={member.lastName} className="w-16 h-16 object-cover" /></td>
      <td className="p-3 text-sm border">{member.lastName}</td>
      <td className="p-3 text-sm border">{member.firstName}</td>
      <td className="p-3 text-sm border">{member.email}</td>
      <td className="p-3 text-sm border">{member.phone}</td>
      <td className="p-3 text-sm border">{member.adress}</td>
      <td className="p-3 text-sm border">{member.city}</td>
      <td className="p-3 text-sm border">{member.cp}</td>
      <td className="p-3 text-sm border">{member.country}</td>
      <td className="p-3 text-sm border">
          <div className="flex items-center gap-5">
              <button className="flex items-center justify-center p-2 rounded-md text-white bg-yellow-500 hover:bg-yellow-600">
                  <FaPenFancy onClick={onOpen}  />
              </button>
              <button className="flex items-center justify-center p-2 rounded-md text-white bg-red-500 hover:bg-red-600">
            
              <IoMdTrash onClick={() => deleteMember(member.id)} />
              </button>
          </div>
          <Form member={member} isUpdate openModal={openModal} onClose={onClose} />
    </td>
  </tr>
  )
}
