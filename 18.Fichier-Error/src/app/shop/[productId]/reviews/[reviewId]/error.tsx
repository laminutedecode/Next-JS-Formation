"use client"


export default function ErrorBoundary({error}:{error: Error}){
  return <div>Erreur dans reviewID - {error.message}</div>
}

//redemare le serveur
{/* <Layout>
  <Template>
    <ErrorBoundary fallback={<Error />}>
      <Suspense fallback={<Loading />}>
        <ErrorBoundary fallback={<Notfound />}>
          <Page />
        </ErrorBoundary>
      </Suspense>
    </ErrorBoundary>
  </Template>
</Layout> */}

