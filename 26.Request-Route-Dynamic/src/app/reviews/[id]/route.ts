import { reviewsTab } from "../data"


export async function GET(_request: Request, {params} : {params: {id : string}}){

  const review = reviewsTab.find((review)=> review.id === parseInt(params.id))
  return Response.json(review)
}
