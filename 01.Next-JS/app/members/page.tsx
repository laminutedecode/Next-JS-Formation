"use client"

import {useState, useEffect, useTransition} from "react"
import {User} from "@/types/types"


export default function PageUsers() {

  const [users, setUsers] = useState<User[]>([])
  const [errors, setErrors] = useState<string | null>(null)
  const [isPending, startTransition] = useTransition()


  useEffect(()=> {
    const fetchUsers = async ()=> {
      try {
        startTransition(async ()=> {
          const response = await fetch('/api/getUsersHeaders', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'User-Agent': '*',
              'Authorization': 'Bearer TOKEN',
              'Cache-Control': 'no-cache',
              'Cookie': 'name=value; name2=value2',
              'X-Custom-Header': 'value',
              'Acess-Control-Allow-Origin': '*',


            }
          })

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

  


  return (
    <section className="w-full h-screen flex items-center justify-center flex-col">

      <h1 className="text-3xl font-black uppercase">Users</h1>

      {isPending && <p>Loading...</p>}

      {errors && <p>{errors}</p>}


      <ul>
        {users.map(user => (
          <li key={user.id} className="border p-2 rounded-md my-2">
            <p> {user.name} - {user.email}</p>
           
          </li>
        ))}
      </ul>

    </section>
  )
}
