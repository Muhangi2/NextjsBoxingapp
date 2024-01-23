import React from 'react'

type VideoCardProps = {
    videourl:string,
    description:string
}

const VideoCard:React.FC<VideoCardProps> = ({videourl,description}) => {
  return (
    <div className='p-3 shrink w-[400px]'>
       <video controls width="600"  className='rounded-lg w-[400px] h-[150px]'>
        <source src="/sample.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <p>{description}</p>

    </div>
  )
}
export default VideoCard