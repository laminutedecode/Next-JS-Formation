import { reviewsTab } from "./data"


export async function GET(){
  return Response.json(reviewsTab)
}

