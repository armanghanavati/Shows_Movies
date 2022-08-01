import React , {useState} from 'react'
import { useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'
import { fetchAsyncMovies, fetchAsyncShows } from '../MovieSlice/MovieSlice'
import "./header.scss"

function Header() {

  const [term , setTerm] = useState('')
  const dispatch = useDispatch()
  
  const searchHandler = (e) =>{
    e.preventDefault()
    dispatch(fetchAsyncMovies(term))
    dispatch(fetchAsyncShows(term))
  }

  return (
    <div className='header'>
      <Link to="/">
        Movie App
      </Link>

      <div className='' >
        <form onSubmit={searchHandler} >
          <input type="text" value={term} onChange={(e)=>setTerm(e.target.value)} />
          <button type='submitt' > search </button>
        </form>
      </div>
    </div>
  )
}

export default Header