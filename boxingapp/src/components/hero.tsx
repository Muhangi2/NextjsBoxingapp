import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import fighter from "./../../assets/fighter.png"

const Hero = () => {
  return (
    <section className='relative  flex-col  mb-2  p-20 items-center rounded-b-md bg-background w-full'>
        {/* heading */}
        <div className='lg:absolute lg:top-0 lg:left-[400px] lg:w-[400px] lg:h-[500px] w-[250px] h-[300px]'>
            <Image className='w-full h-full'  src={fighter} alt=''/>
          </div>
        <div className='mb-1 flex-col gap-1'>
            <div className='flex  bg-zinc-950items-center justify-start  lg:gap-80 '>
            <h1 className='text-[40px] lg:text-[70px]'>JAYDEN</h1>
            <h1 className='text-[40px] lg:text-[70px] '>MARTIN</h1>
            </div>
          <h2 className='text-bold text-[30px]'>BFL FIGHTER</h2>
        </div>
        {/* boxcards */}
          <div className='flex lg:justify-between lg:pr-60  lg:gap-2 gap-1 mb-2 py-4 px-6 flex-wrap '>
            {/* firstbox */}
            <div className='flex items-center justify-center gap-2   '>
                <div>
                    <h2 className='bg-white text-background rounded-full p-4'>$120</h2>
                    </div>
                <div>
                    <h2 >Hourly Rate</h2>
                    <span>First booking free</span>
                </div>
            </div>
        {/* secondbox */}
            <div className='flex-col items-end justify-center p-4 '>
           <h2>Bantemweight Divison</h2>
           <h2>31-8-0(W-L-D)</h2>
           <h2>See  Detailed Stats </h2>
            </div>
          </div>
          {/* buttons */}
          <div className='flex gap-2'>
        <Button className="bg-button w-[150px]">Book Now</Button>
        <Button className='bg-button shadow-lg w-[150px]'>Send Message</Button>
          </div>
         
    </section>
  )
}

export default Hero