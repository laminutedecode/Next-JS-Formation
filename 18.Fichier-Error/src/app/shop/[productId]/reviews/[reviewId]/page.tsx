import { notFound } from "next/navigation";


//######

function getNb(count: number){
  return Math.floor(Math.random() * count)
}

export default function Reviews({params } : { 
  params: {
  productId: string;
  reviewId: string;
}}) {
  //###
  const random = getNb(2);

  if(random === 1){
    console.log('Hello');
  }else {
    throw new Error('Il y a eu une erreur dans review')
  }

  if(parseInt(params.reviewId) > 1000){
    notFound()
  }



  return (
    <div className='w-full h-screen flex items-center justify-center'>
    <h1 className="text-center text-slate-900 text-4xl my-6">REVIEW - {params.reviewId} pour le produit {params.productId} </h1>
  </div>
  )
}