import React from 'react'
import Htext from './shared/Htext'
import { FaWhatsapp } from 'react-icons/fa'
import { FaTiktok } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'
import logo from './../../assets/boxyy22.png';
import Image from 'next/image'


type Props = {

}

const Footer = (props: Props) => {
  return (
    <div className='p-5 relative'>
        <div className=' flex flex-col md:flex-row-reverse md:items-center md:justify-between  px-5 md:gap-10'>
         <div className=''>
           <Htext  className='my-3'>Navigation</Htext>
           <div className='list-none flex flex-col gap-2 text-[20px]  mb-6'>
           <li> Home </li>
           <li> Contact us  </li>
           <li>choose your partner  </li>
         </div>
         </div>
         <div className='bg-button  w-full h-[2px] sm:h-[150px] sm:w-[2px] '></div>
         {/* icons */}
         <div className='flex items-center justify-evenly mb-4 p-3  md:flex md:gap-6 '>
         <FaInstagram className='w-8 h-8'/>
         <FaLinkedinIn className='w-8 h-8'/>
         <FaTwitter className='w-8 h-8'/>
         <FaWhatsapp className='w-8 h-8'/>
         <FaYoutube className='w-8 h-8'/>
        
         </div>
         <div className=' w-full h-[2px] bg-button sm:h-[150px] sm:w-[2px]' ></div> 
        {/* logo */}

         <div className='flex flex-col p-4'>
            <div className='mb-4'> 
                <Image src={logo} alt='name' />
            </div>
          <div>
            <p>Boxy is a booking platform that effortlessly links students and business professionals with fighters and gyms for training, sponsorships, and media opportunities.
        </p>
          </div>
         </div>   
     </div>\

        {/* bottomfooter */}
        <div className='text-start'>
            @2023 all rights reserved
        </div>
        <div
        className="absolute bottom-0 left-1/4  h-[100px] w-[300px] md:w-full  bg-button filter blur-3xl"
        style={{ content: '""', borderTopLeftRadius: '50%', borderTopRightRadius: '50%' }}

      ></div>
    </div>
  )
}

export default Footer