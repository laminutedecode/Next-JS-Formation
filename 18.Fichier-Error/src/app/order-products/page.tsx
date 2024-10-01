"use client"


import { useRouter } from "next/navigation";



export default function Order(){

  const router = useRouter();

  const handleClick = () => {
    router.push('/');
  }


  return (
    <div className='w-full h-screen flex items-center justify-center flex-col'>
    <h1 className="text-center text-slate-900 text-4xl my-6">PAGE ORDER</h1>
    <button onClick={handleClick}  className="bg-slate-900 hover:bg-blue-500 text-white p-3 rounded">Retour Home</button>
  </div>
  )
}