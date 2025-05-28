import React from 'react'
import { getAllMovies } from '../Data/Movies'
import MovieCard from './MovieCard';


const MovieList = () => {
    const movies = getAllMovies();
  return (
    <>
    <section className="relative">
        <div className="grid grid-cols-3  gap-4">
            {movies.map((movie)=>(
              <MovieCard key={movie.id}  movie={movie} />
            ))

            }
        </div>
    </section>
    </>
  )
}

export default MovieList