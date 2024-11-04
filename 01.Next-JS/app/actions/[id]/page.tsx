"use client"

import {useState, useEffect, useTransition} from "react"
import { useParams } from "next/navigation"
import { User } from "@/types/types"
import { getUserById } from "../services/actionUsers"

export default function SinglePageUser() {

  const [user, setUser] = useState<User | null>(null)
  const [errors, setErrors] = useState<string | null>(null)
  const [isPending, startTransition] = useTransition()

  const params = useParams()
  const id = params.id as string

  useEffect(()=> {
    const fetchUserById = async ()=> {
      try {
        startTransition(async ()=> {
            
          const fetechedUser = await getUserById(Number(id))

          if(fetechedUser){
            setUser(fetechedUser)
          }

        })
      }catch(error: any){
        setErrors(error.message)
      }
    }

    fetchUserById()

  }, [id])

  return (
    <div className="w-full h-screen flex items-center justify-center flex-col">

      <h1 className="text-3xl font-black uppercase">User details</h1>

      {isPending && <p>Loading...</p>}
      {errors && <p>{errors}</p>}

      {user && (
        <div>
          <h2>User : {id}</h2>
          <p>Name : {user.name}</p>
          <p>Email : {user.email}</p>
        </div>
      )}

    </div>
  )
}
