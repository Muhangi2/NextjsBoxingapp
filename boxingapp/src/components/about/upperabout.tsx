import React from 'react'
import { Button } from '../ui/button'

const Upperabout = () => {
  return (
    <section className='w-full flex items-center justify-center p-2 mt-5'>
  <div className='flex flex-col  gap-4  items-center justify-center'>
    <div>
      <h1 className='text-bold text-[30px] text-center'>About Jayden Martin</h1>
      <p className='text-center'>Tailwind lets you conditionally apply utility classes in different states using variant modifiers.<br/> You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more.</p>
    </div>
    <Button className='bg-button'>Read the story</Button>
    <div > 
      <video controls width="600" className='rounded-lg'>
        <source src="/sample.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
</section>

  )
}

export default Upperabout