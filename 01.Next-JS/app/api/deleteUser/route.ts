import {NextResponse, NextRequest} from 'next/server';
import fs from "fs"
import path from "path"

const dataPath = path.join(process.cwd(), 'data.json')

export async function DELETE(req: NextRequest) {
  try {

    const {id} = await req.json()

    const jsonData = fs.readFileSync(dataPath, 'utf-8')
    const users : {id: number, name: string, email: string}[] = JSON.parse(jsonData)

    const index = users.findIndex(user => user.id === parseInt(id))

    if(index === -1){
      return NextResponse.json({message: 'User not found'}, {status: 404})
    }

    users.splice(index, 1)

    fs.writeFileSync(dataPath, JSON.stringify(users, null, 2))

    return NextResponse.json({message: 'User deleted'}, {status: 200})

  }catch(error){
    return NextResponse.json({message: 'Erreur DELETE', error}, {status: 500})
  }
}