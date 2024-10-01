// Le fichier Layout est généralement utilisé pour définir la structure globale de la mise en page de votre application. Il s'agit d'un composant réutilisable qui peut envelopper le contenu de chaque page pour fournir une mise en page cohérente, des éléments de navigation ou tout autre contenu partagé.

export default function Home(){
  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <h1 className="text-center text-slate-900 text-4xl my-6">PAGE HOME</h1>
    </div>
  )
}

