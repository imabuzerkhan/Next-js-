"use client"
import { useState , useEffect } from "react"
const getdata = async () =>{
  const url = await fetch ("https://jsonplaceholder.typicode.com/posts")
  const data = url.json()
  return data;
}



const Datafetcing = () => {
const [data , setdata] = useState([])

useEffect(()=>{
  const datafetching = async ()=>{
const result = await getdata()
setdata(result);
  }
  datafetching() ;
}, [] )



  return (
   <>
   {
    data.map((item , id)=>(
      <div key={id}>
        <span className="bg-red-500 text-center block " >Userid: {item.userId}</span>
        <span className="bg-blue-500 text-center block " >Id: {item.id}</span>

        <h1 className="bg-green-200 text-black p-4 " >Title: {item.title}</h1> 

        <p className="bg-green-600 text-black p-4 " >Body: {item.body}</p>
        <hr />
      </div>
    ))
   }
   
   </>
  )
}

export default Datafetcing
