import React , {useEffect} from 'react'
import {useParams} from 'react-router'
import {useDispatch, useSelector}from 'react-redux'
import {fetchAsyncMovieDetailes , getAllDetailes, removeFetchMovieDetaies } from '../MovieSlice/MovieSlice'
import "./MovieDetailes.scss"

function MovieDetailes() {

const {imdbID} = useParams()
const data = useSelector(getAllDetailes)

const dispatch = useDispatch()

useEffect(() => {
     dispatch(fetchAsyncMovieDetailes(imdbID))   

     return ()=>{
      dispatch(removeFetchMovieDetaies())
     }
    }, [dispatch , imdbID])
  
  return (
    <div className='movie-section' >
        {Object.keys(data).length === 0 ?
        (<div> Loading ... </div> ):(
      <>
        <div className='section-left' >
        <div className='movie-title'> {data.Title} </div>
        <div className='movie-ratiting' >
          <span> IMDB rating <i className='fa fa-star' >  </i> : {data.imdbRating}
          </span>
          <span> IMDB Votes <i className='fa fa-thumbs-up' >  </i> : {data.imdbVotes}
          </span>
            <span> Run Time <i className='fa fa-film' >  </i> : {data.Runtime}
          </span>
            <span> Year <i className='fa fa-calender' >  </i> : {data.Year}
          </span>
           </div>
           <div className='movie-plot'> {data.Plot} </div>
            <div className='section-right' >
              <img src={data.Poster} />
            </div>        
            <div className='movie-info' >
              <div>
                <span> Director </span>
                <span> {data.Director} </span>
              </div>
              <div>
                <span> Stars </span>
                <span> {data.Actors} </span>
              </div>
              <div>
                <span> Generes </span>
                <span> {data.Genre} </span>
              </div>
              <div>
                <span> Languages </span>
                <span> {data.Language} </span>
              </div>
              <div>
                <span> Awards </span>
                <span> {data.Awards} </span>
              </div>
            </div>

        </div>
      </>
      )}
     </div>
  )
}

export default MovieDetailes