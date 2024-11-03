"use client"

import React from 'react'
import { useParams, notFound } from 'next/navigation'


export default function PageCategory() {

const params = useParams()
const categoryId = params.categoryId

if(categoryId === 'hello') {
  notFound()
}
if(categoryId === 'salut') {
  return <div>Vous avez pas acces</div>
}




  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <h1 className="text-3xl font-black uppercase">Category : {categoryId}</h1>
    </div>
  )
}
