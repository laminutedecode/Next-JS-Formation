"use client"

import {useState, useEffect, useTransition, FormEvent} from "react"
import { useParams } from "next/navigation"
import { User } from "@/types/types"
import { getUserById, updateUser } from "../../services/actionUsers"
import {useRouter} from "next/navigation"


export default function EditPageUser() {


  const {id} = useParams()
  const [user, setUser] = useState({name: '', email: ''})
  const [errors, setErrors] = useState('')
  const [success, setSuccess] = useState('')
  const [isPending, startTransition] = useTransition()
  const router = useRouter()

  useEffect(()=> {
    const fetchUserById = async ()=> {
      try {
        startTransition(async ()=> {
            const fetchedUser = await getUserById(Number(id))
            if(fetchedUser){
              setUser(fetchedUser)
            }
        })
      }catch(error: any){
        setErrors(error.message)
      }
    }

    fetchUserById()

  }, [id])

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setErrors('')
    setSuccess('')

    try {
      startTransition(async ()=> {
        
        await updateUser(Number(id), user.name, user.email)
        router.push('/actions')
      })

    }catch(error: any){
      setErrors(error.message)
    }
  }



  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    const {name, value} = e.target as HTMLInputElement
    setUser(prevUser => ({...prevUser, [name]: value}))
  }


  return (
    <div className="w-full h-screen flex items-center justify-center flex-col">
      <h1 className="text-3xl uppercase font-black">Update</h1>
      <form onSubmit={handleSubmit} className="flex flex-col">
        {errors && <p className="text-red-500">{errors}</p>}
        {success && <p className="text-green-500">{success}</p>}
        <input 
          type="text"
          name="name"
          placeholder="Indiquez votre nom" 
          className="border p-2 mb-2"
          required 
          value={user.name}
          onChange={handleChange}
        />
        <input 
          type="email"
          name="email"
          placeholder="Indiquez votre email" 
          className="border p-2 mb-2"
          required 
          value={user.email}
          onChange={handleChange}
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">Modifier</button>
      </form>

    </div>
  )
}
