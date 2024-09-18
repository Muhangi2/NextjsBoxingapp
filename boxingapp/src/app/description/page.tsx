import React from 'react'
import Header from '@/components/Headerr'

type Props = {}

const page = (props: Props) => {
  return (
    //Breacdcrumb
    <div>
    <ul>
        <li>Choose your fighter</li>
        <li>Jayden Martin</li>
        <li>Story</li>
    </ul>
    <div>
        <Header/>
        <div>
            <h1>Jayden Smith</h1>
            <p>Story</p>
        </div>
    </div>


    </div>
  )
}
export default page