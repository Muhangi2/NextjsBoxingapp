import Image from 'next/image'
import React from 'react'
import logo from "./../../assets/boxyy22.png"

function Header() {
  return (
    <header>
      <div className=''>
       <div>
        <Image src={logo} alt='name'  />
       </div>
       <div></div>
       <div></div>
      </div>
    </header>
  )
}

export default Header