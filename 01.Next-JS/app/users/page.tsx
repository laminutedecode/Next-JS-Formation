"use client"

import {useState, useEffect, useTransition} from "react"
import Link from "next/link"
import {User} from "@/types/types"


export default function PageUsers() {

  const [users, setUsers] = useState<User[]>([])
  const [errors, setErrors] = useState<string | null>(null)
  const [isPending, startTransition] = useTransition()


  useEffect(()=> {
    const fetchUsers = async ()=> {
      try {
        startTransition(async ()=> {
          const response = await fetch('/api/getUsers')

          if(!response.ok){
            throw new Error('An error occurred while fetching the data')
          }

          const data : User[] = await response.json()
          setUsers(data)
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
          const response = await fetch('/api/deleteUser', {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({id})
          })

          if(!response.ok){
            throw new Error('An error occurred while deleting the user')
          }

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
              <Link className="p-2 rounded-md text-white bg-blue-500 my-2" href={`/users/${user.id}`}>Voir profil</Link>
              <Link className="p-2 rounded-md text-white bg-yellow-500 my-2" href={`/users/edit/${user.id}`}>Modifier</Link>
              <button onClick={()=> handleDelete(user.id)}  className="p-2 rounded-md text-white bg-red-500 my-2">supprimer</button>
            </div>
          </li>
        ))}
      </ul>

    </section>
  )
}
