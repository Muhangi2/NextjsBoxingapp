import React from 'react'
import { Button } from '../ui/button'

const Lowerabout = () => {
  return (
    <div className='mt-6 p-3 text-center'>
      {/* firstcontent */}
      <div className='flex flex-col gap-2'>
         <h1>Highlights</h1>
         <hr/>
         <h2>Explore all the exciting  highlights of the game</h2>
         <div>
            <Button>EXPLORE ALL THE VIDEOS</Button>
         </div>
      </div>

      {/* others */}
      <div>
            others
      </div>

    </div>
  )
}

export default Lowerabout