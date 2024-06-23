import React from 'react'

const page = ({params}) => {
  console.log(params)
  return (
    <div>
      <h1 className='bg-red-500 text-white py-4 px-4 ' >hello my profile id is : {params.id} </h1>
    </div>
  )
}

export default page
