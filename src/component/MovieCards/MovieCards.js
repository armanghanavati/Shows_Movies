import React from 'react'
import "./movieCard.scss"
import {Link} from 'react-router-dom'

function MovieCards({data}) {
  return (
      <div className='card_item' > 
       <Link to={`/movie/${data.imdbID}`} >
        <div className='card_inner' >
          <div className='card_top' >
            <img src={data.Poster} />
            <div className='card_bottom' >
              <div className='card_info' >
                <h4> {data.Title} </h4>
                <p> {data.Year} </p>
              </div>
            </div>
          </div>
        </div>
       </Link>
      </div>
    )
}

export default MovieCards