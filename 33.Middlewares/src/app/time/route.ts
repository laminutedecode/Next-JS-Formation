export async function GET(){
  return Response.json({
    time: new Date().toLocaleTimeString(),
  })
}

//regarder dans http://localhost:3000/time un objet avec lheure

//executer npm run build puis npm run dev