import React from 'react'
import {useSelector} from 'react-redux'
import MovieCards from '../MovieCards/MovieCards'
import { getAllMovies, getAllShows } from '../MovieSlice/MovieSlice'
import './MovieListening.scss'

function MovieListening() {
  const listMovies = useSelector(getAllMovies)
  const listShows = useSelector(getAllShows)

  let renderMovies , renderShows =""
  
  renderMovies = listMovies.Response === "True" ? ( listMovies.Search.map((movie , index)=>(
    <MovieCards key={index} data={movie} />
    )) ):( "error from MovieListening" )
    
    renderShows = listShows.Response === "True" ? ( listShows.Search.map((movie , index)=>(
      <MovieCards key={index} data={movie} />
    )) ):( "error from shows" )

    return (
    <div className='movie_wrapper' >
      <div className='movie_list' >
        <h3 className='text-list' > Movies </h3>
        <div className='movie_container' >{renderMovies} </div>
      </div>
      <div className='movie_list' >
        <h3 className='text-list' > Series </h3>
        <div className='movie_container' >{renderShows} </div>
      </div>
    </div>
  )
}

export default MovieListening