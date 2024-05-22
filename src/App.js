import React, { useState } from 'react'
import data from "./data"
import Tours from './Components/Tours'

const App = () => {

  const [tours,settours] = useState(data)

  if(tours.length === 0){
    const tours = data;
    return(
      <div className="flex flex-col items-center justify-center h-screen">
      <p className="text-xl font-semibold mb-4">No tours left!</p>
      <button
        onClick={() => settours(tours)}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
      >
        Refresh
      </button>
    </div>
    )
  }


  function removeHandler(id){
           const newTours = tours.filter((tour)=> tour.id !== id)
           settours(newTours);
  }

  return (
    <div className=''>
      <Tours tours ={tours} removeHandler = {removeHandler} />
    </div>
  )
}

export default App
