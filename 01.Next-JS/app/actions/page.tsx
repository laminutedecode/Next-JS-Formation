"use client"

import {useState, useEffect, useTransition} from "react"
import Link from "next/link"
import {User} from "@/types/types"
import { getAllUsers, deleteUser } from "./services/actionUsers"


export default function PageUsers() {

  const [users, setUsers] = useState<User[]>([])
  const [errors, setErrors] = useState<string | null>(null)
  const [isPending, startTransition] = useTransition()


  useEffect(()=> {
    const fetchUsers = async ()=> {
      try {
        startTransition(async ()=> {      
          const usersData = await getAllUsers()
          setUsers(usersData)
        })

      }catch(error: any) {
        setErrors(error.message)
      }
    }

    fetchUsers()
  }, [])

  const handleDelete = async(id: number) => {
    if(confirm('Etes-vous sûr de vouloir supprimer cet utilisateur ?')) {
      try {
        startTransition(async ()=> {
          await deleteUser(id)
          setUsers(users.filter(user => user.id !== id))
        })
      }catch(error: any){
        setErrors(error.message)
      }
  }
}


  return (
    <section className="w-full h-screen flex items-center justify-center flex-col">

      <h1 className="text-3xl font-black uppercase">Users</h1>

      {isPending && <p>Loading...</p>}

      {errors && <p>{errors}</p>}


      <ul>
        {users.map(user => (
          <li key={user.id} className="border p-2 rounded-md my-2">
            <p> {user.name} - {user.email}</p>
            <div className="flex justify-between items-center gap-2">
              <Link className="p-2 rounded-md text-white bg-blue-500 my-2" href={`/actions/${user.id}`}>Voir profil</Link>
              <Link className="p-2 rounded-md text-white bg-yellow-500 my-2" href={`/actions/edit/${user.id}`}>Modifier</Link>
              <button onClick={()=> handleDelete(user.id)}  className="p-2 rounded-md text-white bg-red-500 my-2">supprimer</button>
            </div>
          </li>
        ))}
      </ul>

    </section>
  )
}
