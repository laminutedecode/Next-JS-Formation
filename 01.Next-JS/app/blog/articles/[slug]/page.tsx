"use client"

import {useParams} from "next/navigation"

export default function PageSingleSlug() {

  const params = useParams()
  const slug = params.slug

  return (
    <div className='w-full h-screen flex items-center justify-center'>
    <h1 className="text-3xl font-black uppercase">Article : {slug} </h1>
  </div>
  );
}
