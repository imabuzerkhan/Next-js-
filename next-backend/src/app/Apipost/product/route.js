import { NextResponse } from "next/server";

export async function POST(req){
 console.log(req)
  return NextResponse.json({"msg": "post reuest scuessfull"})
} 