import {type NextRequest} from "next/server"
import { reviewsTab } from "./data"


export async function GET(request: NextRequest){

  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");
  const filteredReviews = query ? reviewsTab.filter((review) => review.text.includes(query)) : reviewsTab;
  return Response.json(filteredReviews);
}




export async function POST(request: Request){
  const review = await request.json();
  const newReview = {
    id: reviewsTab.length + 1,
    text: review.text
  }

  reviewsTab.push(newReview)

  return new Response(JSON.stringify(newReview), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 201,
  }
  )
}


