"use client"

import {useState, useEffect, useTransition} from "react"
import { useParams } from "next/navigation"
import { User } from "@/types/types"
import { start } from "repl"

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
            const response = await fetch(`/api/getUserById?id=${id}`)

            if(!response.ok){
              throw new Error("User not found")
            }

            const data : User = await response.json()

            setUser(data)
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
