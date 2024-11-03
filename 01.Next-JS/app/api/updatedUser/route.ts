import {NextResponse, NextRequest} from 'next/server';
import fs from "fs"
import path from "path"

const dataPath = path.join(process.cwd(), 'data.json')

export async function PUT(req: NextRequest) {
  try {

    const {id, name, email} = await req.json()

    const jsonData = fs.readFileSync(dataPath, 'utf-8')
    const users : {id: number, name: string, email: string}[] = JSON.parse(jsonData)

    const index = users.findIndex(user => user.id === parseInt(id))

    if(index === -1){
      return NextResponse.json({message: 'User not found'}, {status: 404})
    }

    users[index] = {...users[index], ...(name && {name}), ...(email && {email})}

    fs.writeFileSync(dataPath, JSON.stringify(users, null, 2))

    return NextResponse.json(users[index], {status: 200})

  }catch(error) {
    return NextResponse.json({message: 'Erreur PUT', error}, {status: 500})
  }
}