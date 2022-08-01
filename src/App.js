import React from 'react'
import {BrowserRouter as Router,Route ,Routes } from 'react-router-dom'
import Footer from './component/Footer/Footer'
import Header from './component/Header/Header'
import Home from './component/Home/Home'
import MovieDetailes from './component/MovieDetiles/MovieDetailes'
import PageNotFound from './component/PageNotFound/PageNotFound'
import "./App.scss"

function App() {
  return (
    <Router>
       <Header/>
       <div className='container'>
        <Routes>
          <Route path='/movie/:imdbID' element={<MovieDetailes/>} />
          <Route path="/" exact element={<Home/>} />
          <Route path="*"  element={<PageNotFound/>} />
         </Routes>
       </div>
         <Footer/>
        </Router>
  )
}

export default App