import React from 'react'
import './About.css';
import { Link } from 'react-scroll';
function About() {
  return (
    <div className='About' id='about'>
      <div className="content">
        <h3 className='h3'>ABOUT ME</h3>
        <hr className='seperator'/>
        <p className='p1'>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>
        <div class="container mt-5 p-5 ">
  <div class="row">
    <div class="col get ">
      <h3><b>Get to know me!</b></h3>
      <p>I'm a <b>Frontend Web Developer</b> building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the <b>Projects</b> section.</p>

<p>I also like sharing content related to the stuff that I have learned over the years in <b>Web Development</b> so it can help other people of the Dev Community. Feel free to Connect or Follow me on my Linkedin where I post useful content related to Web Development and Programming</p>

<p>I'm open to <b>Job</b> opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to <b>contact</b> me.
</p>
<Link className="nav-link text-dark-light"  to="contact"><button type="button" class="btn btn-dark btn-lg shadow-lg" >CONTACT</button></Link>

    </div>
    <div class="col">
     <h3><b>My Skills</b></h3>
     <div className="container">
      <div className="row">
        <p className="col p-2 m-1 skill">HTML</p>
        <p className="col p-2 m-1 skill">CSS</p>
        <p className="col p-2 m-1 skill">JAVASCRIPT</p>
        </div>
        <div className="row">
        <p className="col p-2 m-1 skill">REACT</p>
        <p className="col p-2 m-1 skill">GIT</p>
        <p className="col p-2 m-1 skill">GITHUB</p>
        <p className="col p-2 m-1 skill">Responsive Design</p>
        </div>
      
     </div>
    
     
    </div>
  </div>
  </div>
      </div>
      
    </div>
  )
}

export default About