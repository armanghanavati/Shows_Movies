import React , {useEffect} from 'react'
import MovieListening from '../MovieListening/MovieListening'
import { useDispatch } from 'react-redux'
import { fetchAsyncMovieDetailes, fetchAsyncMovies, fetchAsyncShows } from '../MovieSlice/MovieSlice'

function Home() {

  const dispatch = useDispatch()

  useEffect(() => {

    const movieText = 'Harry'
    const showText = 'Friend'

    dispatch(fetchAsyncMovies(movieText))    
    dispatch(fetchAsyncShows(showText))
    dispatch(fetchAsyncMovieDetailes())
  }, [dispatch])

  return (
    <div className='banner_img' >
      <MovieListening/>
    </div>
  )
}

export default Home