// Lorsque vous créez une application avec Next.js, vous pouvez configurer une page spéciale pour gérer les routes qui ne correspondent à aucune page existante. Pour cela on ca créer un fichier appelé not-found (Créer la page)

export default function Home(){
  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <h1 className="text-center text-slate-900 text-4xl my-6">PAGE HOME</h1>
    </div>
  )
}