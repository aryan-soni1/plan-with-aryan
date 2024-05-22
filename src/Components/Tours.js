import React from 'react'
import Tour from './Tour'

const Tours = ({tours,removeHandler}) => {

    
    
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 gap-12'>
            <div className='  items-center content-center mt-7 border-4  rounded-lg border-dashed border-purple-500 w-fit p-4'>
                <h1 className=' text-5xl font-bold'>Planning with aryan</h1>
            </div>
            <div className=' gap-20 flex flex-wrap mx-auto  ml-48'>
               {
                tours.map((tour,index)=>{
                    return <Tour key={index} tour={tour} removeHandler = {removeHandler} />
                })
               }
            </div>
    </div>
  )
}

export default Tours
