import React from 'react'
import { getImageUrl } from "../utils/cine-utility";


const MovieDetailsModal = ({movie, onClose}) => {
  return (
  <>
  
  <div className=" custommodalclass w-[800px] h-[470px]  flex items-center bg-white/25 backdrop-blur-3xl shadow-2xl gap-5 absolute z-[100] top-[230px] left-1/2 transform -translate-x-1/2 py-3 px-3  hover:w-[860px] hover:h-[570px] transition-all duration-500">
    <div className=" py-2 px-2 space-y-3 w-1/2 ">
      <h3 className="text-2xl  ">{movie.title}</h3>
      <p className="text-sm">{movie.genre}</p>
     <p>{movie.description}</p>
     <div className="flex items-center justify-center">
           <p className="bg-sky-400 py-1 px-2 rounded-sm w-1/2 text-center  ">Tk {movie.price}</p>
      <button className="w-1/2 text-center  " onClick={onClose} >Close</button>
     </div>
    
    </div>


    <div className="w-1/2">
      <img src={getImageUrl(movie.cover)} alt={movie.title} />
     
    </div>
  </div>
  </>
  )
}

export default MovieDetailsModal