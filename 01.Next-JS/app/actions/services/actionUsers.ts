"use server"

import fs from "fs"
import path from 'path'
import { User } from "@/types/types"

const dataPath  = path.join(process.cwd(), 'data.json')

const readUsers = (): User[]=> {
  const jsonData = fs.readFileSync(dataPath, 'utf-8')
  return JSON.parse(jsonData)
}

const writeUsers = (user: User[]) => {
  fs.writeFileSync(dataPath, JSON.stringify(user, null, 2))
}

export const getAllUsers = async() : Promise<User[]> => {
  try {
    return readUsers()
  }catch(error){
    throw new Error(error)
  }
}

export const getUserById = async(id : number) : Promise<User | undefined> => {
  try {
    const users = readUsers()
    return users.find(user => user.id === id)
  }catch(error){
    throw new Error(error)
  }
}

export const createUser = async(name: string, email:string) : Promise<User> => {
  try {
    const users = readUsers()
    const newUser : User = {
      id: users.length + 1,
      name,
      email
    }
    users.push(newUser)
    writeUsers(users)
    return newUser
  }catch(error){
    throw new Error(error)
  }
}



export const updateUser = async(id : number, name?: string, email?:string) : Promise<User | undefined> => {
  try {
    const users = readUsers()
    const index =  users.findIndex(user => user.id === id)
    if(index === -1){
      throw new Error("User not found")
    }
    users[index] = {...users[index], ...(name && {name}), ...(email && {email})}
    writeUsers(users)
    return users[index]
  }catch(error){
    throw new Error(error)
  }
}

export const deleteUser = async(id : number) : Promise<User | undefined> => {
  try {
    const users = readUsers()
    const index =  users.findIndex(user => user.id === id)
    if(index === -1){
      throw new Error("User not found")
    }
    users.splice(index, 1)
    writeUsers(users)
    return {message: "User deleted"}
  }catch(error){
    throw new Error(error)
  }
}






