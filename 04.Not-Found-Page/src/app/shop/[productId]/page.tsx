export default function Product({params} : { params: {
  productId: string
}}){
  // params est un objet qui représente les paramètres dynamiques d'une route. 
  return (
    <div className='w-full h-screen flex items-center justify-center'>
    <h1 className="text-center text-slate-900 text-4xl my-6">PRODUIT {params.productId}</h1>
  </div>
  )
}