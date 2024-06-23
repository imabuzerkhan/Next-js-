"use client"

import { useState , useEffect } from "react";


const getdata = async ()=>{
  let response = await fetch('http://universities.hipolabs.com/search?country=Nepal');
  let data = response.json()
return data;
}




const Schoolfetch = () => {
  const [data , Setdata] = useState([])

  useEffect(()=>{
    const fetchdata = async ()=>{
      let result = await getdata()
      console.log(result)
      Setdata(result)
    }
    fetchdata();
  } , [])



  return (
  <>
  {
    data.map((item)=>(
      <div className="" key={item.id}>
        <h1 className="bg-white text-black" >College name: {item.name}</h1>
        <span>Country: {item.country}</span>
      </div>

    ))
  }
  </>
  )
}

export default Schoolfetch
