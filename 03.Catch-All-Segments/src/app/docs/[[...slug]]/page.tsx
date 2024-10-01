export default function Docs({params} : {
  params: {
    slug: string[]
  }
}){

  if(params.slug?.length === 2){
    return <h2>Slug 1: {params.slug[0]} et Slug 2  {params.slug[1]} </h2>
  }else if(params.slug?.length === 1){
    return <h2>Slug 1: {params.slug[0]} </h2>
  }

  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <h1 className="text-center text-slate-900 text-4xl my-6">DOCS HOME</h1>

  
    </div>
  )
}

// Par exemple, pages/docs/[...slug] correspondra à docs/feature mais aussi à /docs/feature/shop, docs/feature/shop/products, et ainsi de suite.
// http://localhost:3000/docs/feature/
// http://localhost:3000/docs/feature/shop
// http://localhost:3000/docs/feature/shop/product

// Cela permet une grande flexibilité dans la gestion des URL dans une application web, car elle peut s'adapter à une variété de structures d'URL sans avoir besoin de définir explicitement chaque possibilité.
