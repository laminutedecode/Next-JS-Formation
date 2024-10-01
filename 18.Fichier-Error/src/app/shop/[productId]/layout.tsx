
function getNb(count: number){
  return Math.floor(Math.random() * count)
}


export default function ProductLayout({
  children,
}: {
  children: React.ReactNode
}) {




  const random = getNb(2);

  if(random === 1){
    console.log('Hello');
  }else {
    throw new Error('Il y a eu une erreur dans product')
  }



  return (
    <>
     
        <h2>Je suis rajouter depuis layout de products</h2>
        {children}


    </>
  )
}


