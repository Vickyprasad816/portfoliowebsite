import React from 'react'
import './Home.css'
import { Link } from 'react-scroll'

function Home() {
  return (
    <div className='Home' id='home'>
      <div className="d-flex align-items-center justify-content-center vh-100 ">
        <div className="text">
      <h1 className='heading'>HEY, I'M VICKY</h1>
      <p className='paragraph'>A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</p>
      
      <Link className="nav-link text-dark-light"  to="project"><button type="button" class="btn btn-dark btn-lg shadow-lg" >PROJECTS</button></Link>
      </div>
      </div>
      
    </div>
  )
}

export default Home