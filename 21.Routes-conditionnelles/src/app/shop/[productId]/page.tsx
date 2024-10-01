import { Metadata } from "next"
// Metadata permet d'accéder à un type de données prédéfini utilisé pour définir les métadonnées d'une page. 
type Props = {
  params:{
    productId: string;
  }
}

export const generateMetadata = async ({params} : Props) : Promise <Metadata> => {
  const title = await new Promise(resolve => {
    setTimeout(()=> {
      resolve(`${params.productId}`)
    },100)
  })
  return {
    title: `Produit ${title}`,
  }
}


export default function Product({params} : Props ){

  return (
    <div className='w-full h-screen flex items-center justify-center'>
    <h1 className="text-center text-slate-900 text-4xl my-6">PRODUIT {params.productId}</h1>
  </div>
  )
}