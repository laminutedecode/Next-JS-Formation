export default function NotFound(){
  return (
    <div className='w-full h-screen flex items-center justify-center'>
    <h1 className="text-center text-slate-900 text-4xl my-6">404 not found depuis reviews</h1>
  </div>
  )
}

// Montrer le resultat
// http://localhost:3000/shop/pot/reviews/5 ( sa fonctionne)
// http://localhost:3000/shop/pot/reviews/1005 ( notre 404 personalisé)