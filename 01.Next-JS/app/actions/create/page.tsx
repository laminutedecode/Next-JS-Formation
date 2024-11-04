"use client"

import {useState, FormEvent} from "react"
import { createUser } from "../services/actionUsers"

export default function CreatePageUser() {

  const [name, setName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [errors, setErrors] = useState<string | null>(null)
  const [success, setSuccess] = useState<string>('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setErrors(null)
    setSuccess('')

    try {

       await createUser(name, email)

      setSuccess(`Utilisateur créé - ${name}`)
      setName('')
      setEmail('')
    }catch(error:any) {
      setErrors(error.message)
    }
  }


  return (
    <div className="w-full h-screen flex items-center justify-center flex-col">
      <h1 className="text-3xl uppercase font-black">Create</h1>
      <form onSubmit={handleSubmit} className="flex flex-col">
        {errors && <p className="text-red-500">{errors}</p>}
        {success && <p className="text-green-500">{success}</p>}
        <input 
          type="text"
          placeholder="Indiquez votre nom" 
          className="border p-2 mb-2"
          required 
          value={name}
          onChange={(e)=> setName(e.target.value)}
        />
        <input 
          type="email"
          placeholder="Indiquez votre email" 
          className="border p-2 mb-2"
          required 
          value={email}
          onChange={(e)=> setEmail(e.target.value)}
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">Créer</button>
      </form>

    </div>
  )
}
