import React, {} from 'react'
import './Nav.css';
import { Link} from 'react-scroll';



function Nav() {
  return (
    <div className='Nav'>
        <nav className="navbar navbar-expand-sm fixed-top  bg-white">
    <div className="container-fluid">
      <div className="img"s><img  src={require('../../assests/Navbar.png')} alt="Navimg"className="navbar-brand img-fluid"  />Vicky</div>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className=" d-flex gap-5 navbar-nav ms-auto mr-2 font-weight-bold ">
          <Link className="nav-link text-dark-light"  to="home">Home</Link>
          <Link className="nav-link text-dark-light"  to="about">About</Link>
          <Link className="nav-link text-dark-light"  to="project">Projects</Link>
          <Link className="nav-link text-dark-light"  to="contact">Contact</Link>
        </div>
      </div>
    </div>
  </nav>
  
  </div>
  )
}

export default Nav