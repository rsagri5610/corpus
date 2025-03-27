import React from 'react'

function SliderCard({image}) {
  return (
    <div className='space-x-20 hover:shadow-2xl ' onClick={()=>{alert(image)}}>
      <div className='p-6'>
        <img src={image} className='md:w-[200px] md:h-[200px] sm:w-[600px] sm:h-[600px] lg:w-[300px] lg:h-[300px] sm:object-contain md:object-contain lg:object-contain' />
      </div>
    </div>
  )
}

export default SliderCard
