import React from 'react'
import { Button } from '../ui/button'
import Htext from '../shared/Htext'
import VideoCard from './Video'


const data=[
    {
      videourl:"hero",
      description:"complete list of all available state modifiers"
    },
    {
        videourl:"variant",
        description:"Tailwind provides five border radius size utilities. You can change, add, or remove these by editing "
    },
    {
        videourl:"value that doesnt",
        description:"value that doesn’t make sense to include in your theme, "
    }
]

const Lowerabout = () => {
  return (
    <div className='mt-6 p-3 text-center md:flex md:gap-5 '>
      {/* firstcontent */}
      <div className='flex flex-col gap-4'>
         <Htext>Highlights</Htext>
         <hr/>
         <h2>Explore all the exciting  highlights of the game</h2>
         <div>
            <Button className='bg-button'>EXPLORE ALL THE VIDEOS</Button>
         </div>
      </div>
      <div className='md:min-w-1 md:min-h-6 bg-background'></div>
      {/* others */}
      <div className='mt-4 md:flex gap-2 p-2 flex-co'>
        {data.map((content,index)=>(
            <VideoCard key={index} 
             videourl={content.videourl} 
             description={content.description} 
              />
        ))} 
            
      </div>

    </div>
  )
}

export default Lowerabout