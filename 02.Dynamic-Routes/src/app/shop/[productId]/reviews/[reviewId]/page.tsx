export default function Reviews({params } : { 
  params: {
  productId: string;
  reviewId: string;
}}) {
  // params est un objet qui représente les paramètres dynamiques d'une route. 
  return (
    <div className='w-full h-screen flex items-center justify-center'>
    <h1 className="text-center text-slate-900 text-4xl my-6">REVIEW - {params.reviewId} pour le produit {params.productId} </h1>
  </div>
  )
}