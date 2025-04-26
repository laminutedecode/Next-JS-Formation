"use client"

import { createTask } from "@/utils/actions"
import { useFormStatus } from "react-dom"


export default function AddForm() {

  
  const BtnSubmit =  ()=> {
    const {pending} = useFormStatus();
    return <button disabled={pending} type="submit" className="text-white bg-green-500 hover:bg-green-700 p-3 "> {pending ? "création en cours..." : "Ajouter"}</button>
  }

  return (
    <form action={createTask}  className="max-w-[700px] flex items-center mb-2">
        <input name="task" required placeholder="Ajouter une tâche" type="text" className="h-[50px] border border-gray-300 p-2" />
        <BtnSubmit/>
    </form>
  )
}
