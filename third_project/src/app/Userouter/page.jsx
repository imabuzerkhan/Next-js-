"use client"

import React from 'react'
import { useRouter } from 'next/navigation'
const Userouter = () => {
  const router = useRouter()
  return (
    <div>
      <h1>hello uncle namste chalo kam kii baat pe aaate </h1>
      <button onClick={()=>router.push('/Dashboard')} >Go to Dashboard page</button>
    </div>
  )
}

export default Userouter
