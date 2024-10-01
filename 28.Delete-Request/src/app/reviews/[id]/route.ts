import { reviewsTab } from "../data"


export async function GET(_request: Request, {params} : {params: {id : string}}){

  const review = reviewsTab.find((review)=> review.id === parseInt(params.id))
  return Response.json(review)
}



export async function PATCH(request: Request, {params} : {params: {id: string}}){

  const body = await request.json();
  const {text} = body;
  const index = reviewsTab.findIndex(
    review => review.id === parseInt(params.id)
  );

  reviewsTab[index].text = text;

  return Response.json(reviewsTab[index])
  
}



export async function DELETE(request: Request, {params} : {params: {id: string}}){


  const index = reviewsTab.findIndex(
    review => review.id === parseInt(params.id)
  );
  
  const deleteReview = reviewsTab[index]

  reviewsTab.splice(index, 1)


  return Response.json(deleteReview)
  
}
