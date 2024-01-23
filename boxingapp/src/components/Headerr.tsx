import Image from 'next/image';
import React from 'react';
import logo from './../../assets/boxyy22.png';
import Link from 'next/link';
import { Button } from './ui/button';

function Header() {
  return (
    <header className='mt-3 '>
      <div className='bg-black flex items-center w-full justify-between rounded-md px-1 border border-spacing-2 border-button '>
        {/* logo */}
        <div>
          <Image src={logo} alt='name' />
        </div>
        {/* navsection */}
        <div>
          <nav className='flex gap-1  text-white text-xs  items-center justify-end list-none'>
            <li>
              <Link href='/'>CHOOSE YOUR PARTNER</Link>
            </li>
            <div className='w-1 h-9 bg-background'>

            </div>
            <li>
              <Link href=''>CONTACT US</Link>
            </li>
          </nav>
        </div>
        {/* button */}
        <div>
          <Button className='bg-button' >SIGNIN</Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
