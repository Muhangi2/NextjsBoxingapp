import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import fighter from "./../../assets/fighter.png"

const Hero = () => {
  return (
    <section className='relative  flex-col gap-12 mb-2 h-[500px] p-3 items-center'>
        {/* heading */}
        <div className='mb-1 flex-col gap-1'>
            <div className='flex gap-16 items-center justify-between'>
            <h1 className='text-[80px] tracking-wide'>JAYDEN</h1>
            <h1 className='text-[80px] tracking-wide '>MARTIN</h1>
            </div>
          <h2 className='text-bold text-[30px]'>BFL FIGHTER</h2>
        </div>
        {/* boxcards */}
          <div className='flex justify-between  mb-2'>
            {/* firstbox */}
            <div className='flex items-center justify-center gap-2'>
                <div>
                    <h2 className='bg-white text-background rounded-full p-2'>$120</h2>
                    </div>
                <div>
                    <h2 >Hourly Rate</h2>
                    <span>First booking free</span>
                </div>
            </div>
        {/* secondbox */}
            <div className='flex-col  items-end justify-center '>
           <h2>Bantemweight Divison</h2>
           <h2>31-8-0(W-L-D)</h2>
           <h2>See  Detailed Stats </h2>
            </div>
          </div>
          {/* buttons */}
          <div className='flex gap-2'>
        <Button className="bg-button">Book Now</Button>
        <Button className='bg-button shadow-lg'>Send Message</Button>
          </div>
          <div className='absolute top-0 left-1/3 w-[350px] h-[400px]'>
            <Image className='w-full h-full'  src={fighter} alt=''/>
          </div>
    </section>
  )
}

export default Hero