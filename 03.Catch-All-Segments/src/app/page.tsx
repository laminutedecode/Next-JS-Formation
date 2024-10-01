// Les segments avec le routage peuvent également inclure des segments de capture globale, également appelés "catch-all segments". Cela permet de capturer tous les segments de l'URL restants après une certaine partie de l'URL. Ils peuvent être étendus pour capturer tous les segments suivants.

export default function Home(){
  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <h1 className="text-center text-slate-900 text-4xl my-6">PAGE HOME</h1>
    </div>
  )
}