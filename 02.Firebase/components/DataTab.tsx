import { useFirebase } from '@/context/dataContext';
import DataItems from './DataItems';

export default function DataTab() {

  const {members} = useFirebase()

  return (
    <table className="shadow-lg rounded-lg border divide-y divide-x">
      <thead>
        <tr className="bg-gray-800 text-white">
          <th className="p-3 text-sm border">ID</th>
          <th className="p-3 text-sm border">Image</th>
          <th className="p-3 text-sm border">Nom</th>
          <th className="p-3 text-sm border">Prenom</th>
          <th className="p-3 text-sm border">E-mail</th>
          <th className="p-3 text-sm border">Téléphone</th>
          <th className="p-3 text-sm border">Adresse</th>
          <th className="p-3 text-sm border">Ville</th>
          <th className="p-3 text-sm border">Code postal</th>
          <th className="p-3 text-sm border">Pays</th>
          <th className="p-3 text-sm border">Actions</th>
        </tr>
      </thead>
      <tbody>
      {members.map((member) => (
        <DataItems key={member.id} member={member} />
      ))}
      </tbody>
  </table>
  )
}
