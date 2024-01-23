import React from 'react'
import Htext from '../shared/Htext'
import { Button } from '../ui/button'

type Props = {

}

const Stats = (props: Props) => {
  return (
    <div className='flex flex-col  gap-4 p-4'>

    <Htext className='text-center'>Stats and Records</Htext>
    <div className='flex flex-col gap-2 p-3'>
        <div className='flex  md:gap-8 justify-center items-center '>
           <div className='flex gap-1'>
           <h2 className='text-button'>AGE</h2>
           <span>34/56</span>
           </div>

      <div className='w-[2px] h-[20px] bg-background'></div>
           <div className='flex gap-1'>
           <h2 className='text-button'>HEIGHT</h2>
           <span>65CM</span>
           </div>
     <div className='w-[2px] h-[20px] bg-background'></div>
           <div className='flex gap-1'>
           <h2 className='text-button'>WEIGHT</h2>
           <span>155</span>
           </div>
    <div className='w-[2px] h-[20px] bg-background'></div>
           <div className='flex gap-1'>
           <h2 className='text-button'>REACH</h2>
           <span>155 70.3KG</span>
           </div>

        </div>
    {/* circles */}
        <div className='flex items-center justify-evenly gap-3'>
            <div className='flex gap-2 items-center justify-between'>
            <h2  className='bg-background p-6 rounded-full '>17</h2>
            <p>Total losses</p>
            </div>


            <div className='flex gap-2 items-center justify-between'>
            <h2 className='bg-background p-6 rounded-full'>1</h2>
            <p>Total losses</p>
            </div>


            <div className='flex gap-2'>
            <h2 className='bg-background p-6 rounded-full'>1</h2>
            <p>Total losses</p>
            </div>

        </div>

     {/* curvedcards */}
        <div className='flex flex-col gap-3 rounded-md '>
            {/* firstcard */}
              <div className='flex bg-background items-center justify-evenly py-7 px-4 rounded-md gap-2'>
                <div className='flex flex-col'>
                    <h2>4</h2>
                    <span>knockoutwins</span>
                </div>
                <div className='bg-button w-[2px] h-[100px]'></div>
                <div className='flex flex-col'>
                    <h2>18</h2>
                    <span>Technical knockoutwins</span>
                </div>
                <div className='bg-button w-[2px] h-[100px]'></div>
                <div className='flex flex-col'>
                    <h2>4</h2>
                    <span>submission wins</span>
                </div>
              </div>
              {/* secondcard */}
              <div className='flex bg-background items-center justify-evenly py-7 px-4 rounded-md gap-2'>
                <div className='flex flex-col'>
                    <h2>4</h2>
                    <span>knockoutwins</span>
                </div>
                <div className='bg-button w-[2px] h-[100px]'></div>
                <div className='flex flex-col'>
                    <h2>18</h2>
                    <span>Technical knockoutwins</span>
                </div>
                <div className='bg-button w-[2px] h-[100px]'></div>
                <div className='flex flex-col'>
                    <h2>4</h2>
                    <span>submission wins</span>
                </div>
              </div>
              <div className='bg-background p-6 rounded-lg border border-spacing-2 border-button flex flex-col items-center justify-center gap-5'>
                <Htext className='text-center'>Schedule a meeting</Htext>
                <hr className='w-[300px] h-[5px] '/>
                <div className='flex gap-4  p-3 items-center justify-evenly'>
                    <Button className='bg-button'>Book Now </Button>
                    <Button className='bg-button'>Send Message</Button>
                </div>
              </div>
        </div>
    </div>
    </div>
  )
}

export default Stats