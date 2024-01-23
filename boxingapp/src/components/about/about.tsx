import React from 'react'
import Upperabout from './upperabout'
import Lowerabout from './lowerabout'

const About = () => {
  return (
    <>
    <div className='w-full bg-gradient-to-t from-background' style={{background: "linear-gradient(to top left, #3490dc)"}}>
    <Upperabout/> 
    <Lowerabout/>
    </div>
        
    </>
  )
}

export default About