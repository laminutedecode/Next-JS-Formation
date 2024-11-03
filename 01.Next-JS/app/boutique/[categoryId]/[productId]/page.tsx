"use client"

import React from 'react'
import { useParams } from 'next/navigation'

export default function PageSingleProduct() {

const params = useParams()
const productId = params.productId

  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <h1 className="text-3xl font-black uppercase">Produit : {productId}</h1>
    </div>
  )
}
