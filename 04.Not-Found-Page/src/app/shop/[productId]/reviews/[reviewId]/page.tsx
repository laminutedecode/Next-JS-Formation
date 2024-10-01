
  // ####
import { notFound } from "next/navigation";


// La fonction NotFound est utilisée pour indiquer explicitement à Next.js qu'une page spécifique doit être considérée comme une page "Not Found". Cette fonction est utile lorsque vous souhaitez définir dynamiquement une page comme étant la page "Not Found" en fonction de certaines conditions ou de la logique de votre application.

export default function Reviews({params } : { 
  params: {
  productId: string;
  reviewId: string;
}}) {


  // ####
  if(parseInt(params.reviewId) > 1000){
    notFound()
  }
  // créer un epage not-found dans le dossier [reviewsId]


  return (
    <div className='w-full h-screen flex items-center justify-center'>
    <h1 className="text-center text-slate-900 text-4xl my-6">REVIEW - {params.reviewId} pour le produit {params.productId} </h1>
  </div>
  )
}