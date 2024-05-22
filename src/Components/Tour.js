import React, { useState } from "react";

const Tour = ({ tour, removeHandler }) => {
  const info = tour.info;
  const description = info.substring(0, 200);
  const [readmore, setreadmore] = useState(false);

  
  return (
    <div className="card border-2 border-blue-500 rounded-lg w-[350px] flex flex-col gap-3 shadow-lg transition transform hover:scale-105">
      <div>
        <img src={tour.image} alt="" className="w-full h-[300px] object-cover rounded-t-lg" />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-2xl font-bold">{tour.name}</h3>
          <p className="text-xl text-blue-500 font-semibold">₹{tour.price}</p>
        </div>
        <p className="text-gray-700">
          {readmore ? (
            <span>
              {info}
              <span
                className="text-blue-400 cursor-pointer hover:text-blue-800 ml-2"
                onClick={() => setreadmore(!readmore)}
              >
                show less
              </span>
            </span>
          ) : (
            <span>
              {description}...
              <span
                className="text-blue-400 cursor-pointer hover:text-blue-800 ml-2"
                onClick={() => setreadmore(!readmore)}
              >
                show more
              </span>
            </span>
          )}
        </p>
      </div>
      <div className="bg-red-200 p-3 rounded-md border-2 border-red-500 w-[90%] mx-auto flex justify-center items-center hover:bg-red-500 hover:text-white transition mb-3">
        <button onClick={() => removeHandler(tour.id)} className="text-red-700 hover:text-white ">
          Not interested
        </button>
      </div>
    </div>
  );
};

export default Tour;
