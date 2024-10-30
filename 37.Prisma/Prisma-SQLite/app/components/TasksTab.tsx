import { getAllTaks } from "@/utils/actions";
import DeleteButton from "@/app/components/DeleteButton";
import UpdateButton from "@/app/components/UpdateButton";
import Link from "next/link";

export default async function TasksTab() {

  const tasks = await getAllTaks()

  

  return (
      <>
        {tasks.length === 0 ? (
           <p>Aucune taches</p>
        ): (
          <table className="max-w-[700px] m-auto border-collapse border border-gray-200">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">ID</th>
              <th className="border border-gray-300 px-4 py-2">Task</th>
              <th className="border border-gray-300 px-4 py-2">Completed</th>
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id}>
                <td className="border border-gray-300 px-4 py-2">{task.id}</td>
                <td className="border border-gray-300 px-4 py-2">{task.content}</td>
                <td className="border border-gray-300 px-4 py-2">{task.completed ? 'true' : 'false'}</td>
                <td className="flex items-center gap-2 px-4  py-2">
                  <Link href={`task/${task.id}`}><UpdateButton/></Link>
                  <DeleteButton id={task.id}/>
                </td>
              </tr>
            ))}
          </tbody>
      </table>
        )}
      </>
  );
}
