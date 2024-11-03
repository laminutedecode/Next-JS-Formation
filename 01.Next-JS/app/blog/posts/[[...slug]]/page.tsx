
"use client"

import {useParams} from "next/navigation"

export default function SingleCatchAllSegmentPage() {

  const params = useParams()
  const slug = Array.isArray(params.slug) ? params.slug : [params.slug]


  return (
    <div className='w-full h-screen flex items-center justify-center'>
    <h1 className="text-3xl font-black uppercase">Post : {slug?.length > 0 && slug.join('/')} </h1>
  </div>
  );
}
