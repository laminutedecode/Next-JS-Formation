import React from 'react'
import type { Metadata } from 'next'
import ComponentUseClient from './components/ComponentUseClient'
import ComponentUseServer from './components/ComponentUseServer'
import ComponentForm from './components/ComponentForm'

export const metadata: Metadata = {
  title: 'Contact',
  description: "Je suis une description",
  keywords: 'mot1, mot2, mot3',
  openGraph : {
    title: 'Titre pour openGraph',
    description: "Description de l'openGraph",
    images: ['/pah/to/image.jpg']
  },
  twitter : {
    card: 'summary_large_image',
    title: 'Titre pour Twitter',
    description: "Description de Twitter",
    images: ['/pah/to/image.jpg']
  },
}

export default function PageContact() {
  return (
    <div className='w-full h-screen flex items-center justify-center flex-col'>
      <h1 className="text-3xl font-black uppercase">Contact</h1>

      <ComponentUseClient/>
      <ComponentUseServer/>
      <ComponentForm/>
    </div>
  )
}
