// import { type Instrumentation } from "next";

// export const OnRequestError: Instrumentation.onRequestError = async (
//   err,
//   request,
//   context
// ) => {

//   await fetch('URL_SERVICE_EXTERNE', {
//     method: "POST",
//     body: JSON.stringify({
//       message: err,
//       request,
//       context,
//     }),
//     headers: {
//       "Content-Type": "application/json",
//     }
//   })

// }


// export function register(){
//   if(process.env.NEXT_RUNTIME === "edge") {
//     return require('./register.edge')
//   }else {
//     return require('./register.node')

//   }
// }