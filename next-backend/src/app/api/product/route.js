import { NextResponse } from "next/server";

// export async function GET(req){
//   console.log(req)
//   return NextResponse.json({"msg": "Hello World Next js api"});
// }


// ! response one data 
// export async function GET(req){
//   return NextResponse.json({"id":1 ,
//     "name": "Mohammad abuzer khan" ,
//     "study": "Nepal business college"
//    })
   
// }

// ** add multiple  data 
export async function GET(req){

// ** use query
// const {searchParams} = new URL(req.url)
const searchParams = req.nextUrl.searchParams
console.log(searchParams);

console.log(searchParams.get("search"))

// ** cookies 
const cook1 = req.cookies;
console.log(cook1)




  const data = [
    { id: 1, name: "Mohammad Abuzer Khan", study: "Nepal Business College" },
    { id: 2, name: "John Doe", study: "Harvard University" },
    { id: 3, name: "Jane Smith", study: "Stanford University" },
    { id: 4, name: "Alice Johnson", study: "MIT" },
    { id: 5, name: "Bob Brown", study: "Yale University" },
    { id: 6, name: "Charlie Davis", study: "Princeton University" },
    { id: 7, name: "David Wilson", study: "Columbia University" },
    { id: 8, name: "Eva Thompson", study: "University of Chicago" },
    { id: 9, name: "Frank Garcia", study: "Caltech" },
    { id: 10, name: "Grace Lee", study: "Oxford University" },
  ]
  return NextResponse.json(data)
}