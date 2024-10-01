import { notFound } from "next/navigation";




export default function Reviews({params } : { 
  params: {
  productId: string;
  reviewId: string;
}}) {


  if(parseInt(params.reviewId) > 1000){
    notFound()
  }



  return (
    <div className='w-full h-screen flex items-center justify-center'>
    <h1 className="text-center text-slate-900 text-4xl my-6">REVIEW - {params.reviewId} pour le produit {params.productId} </h1>
  </div>
  )
}