"use client"


import { useRouter } from "next/navigation";





export default function Order(){

  const router = useRouter();

  const handleClick = () => {
    router.push('/');
    
    // Avec le hook useRouter, vous pouvez accéder à différentes méthodes de navigation, telles que push, replace, back, etc.
    // push pour naviguer vers une autre page de manière programmable. Par exemple, vous pouvez déclencher cette action sur un événement utilisateur comme un clic sur un bouton.
    // replace est utilisée pour remplacer l'URL actuelle par une nouvelle URL sans ajouter une nouvelle entrée dans l'historique de navigation du navigateur.(replace/nouvelle-page)
    // back est utilisée pour revenir à la page précédente dans l'historique de navigation du navigateur. 
    
    // forward est utilisée pour avancer vers la page suivante dans l'historique de navigation du navigateur. Elle est souvent utilisée en conjonction avec la méthode back pour permettre à l'utilisateur de naviguer dans l'historique de navigation de l'application.

   
  }




  return (
    <div className='w-full h-screen flex items-center justify-center flex-col'>
    <h1 className="text-center text-slate-900 text-4xl my-6">PAGE ORDER</h1>
    <button onClick={handleClick}  className="bg-slate-900 hover:bg-blue-500 text-white p-3 rounded">Retour Home</button>
  </div>
  )
}