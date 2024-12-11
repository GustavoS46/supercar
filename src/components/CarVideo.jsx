import React from 'react';
import video from '../assets/videoplayback.mp4'

const CarVideo = () => {
  return (
    <div>
      <video src={video} className='w-full' autoPlay loop muted></video>
    </div>
  )
}

export default CarVideo