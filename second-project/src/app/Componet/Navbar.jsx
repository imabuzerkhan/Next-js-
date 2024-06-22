import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
   <>
   <nav className='bg-green-200 py-4 px-6 ' >
    <div className="logo text-red-600 ">abuzer</div>
    <div className="text">
      <ul className='flex items-center  justify-center text-black  ' >
        <Link href="/" >Home
        </Link>
        <Link href="/about">About</Link>
      </ul>
    </div>
   </nav>
   </>
  )
}

export default Navbar
