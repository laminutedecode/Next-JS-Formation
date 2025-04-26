import { deleteTasks } from "@/utils/actions"

export default function DeleteButton({id}) {
  return (
    <form action={deleteTasks}>
      <input type="hidden" name="id" value={id} />
      <button className="text-white bg-red-500 hover:bg-red-700 p-2 rounded-md">Supprimer</button>
    </form>
  )
}
