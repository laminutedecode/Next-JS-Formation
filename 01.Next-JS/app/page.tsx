"use client"

import {useRouter} from "next/navigation"
import MyImage from "@/public/image.jpg"
import Image from "next/image"


export default function Home() {

  
  const router = useRouter()
  

  const handleSubmit = ()=> {
    
    router.forward()

  }

  const imageUrl = "https://images.unsplash.com/photo-1719937206158-cad5e6775044?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"


  return (
    <div className='w-full h-screen flex items-center justify-center flex-col'>
    <h1 className="text-3xl font-black uppercase">Home</h1>

    <Image 
      src={imageUrl} 
      width={500} 
      height={500} 
      alt="Temple chinois"
      // sizes="(max-width: 500px) 100vw, 500px"
      // quality={80} 
      // priority={true}
      // placeholder="blur"
      // onLoad={()=>console.log("Image chargée")}
      // onError={()=>console.log("Erreur de chargement")}
      // loading="eager"
      />
    
    <button className="p-2 bg-blue-500 rounded-md text-white mt-2" onClick={handleSubmit}>Contactez moi</button>

  </div>
  );
}
