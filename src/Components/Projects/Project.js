import React from 'react'
import './Project.css';


function Project() {
  return (
    <div className='Project' id='project'>
      <div className="container">
        <h3 className='h3'>Projects</h3>
        <hr className='seperator' />
        <p className='p1'>Here you will find some of the personal and clients projects that I created with each project containing its own case study</p>
        <div class="container">
          <div class="row">
            <div class="col mt-5">
              <img src={require('../../assests/Textutils.jpg')} alt='Textutils' width='100%' height='100%' />
            </div>
            <div class="col ">
              <h3 className='h3'>TEXT-UTILS</h3>
              <p className='get'>Text Utilis, your versatile online text manipulation tool! Text Utilis empowers you to easily modify and
                manage your text in various ways. Whether you need to convert text to uppercase or lowercase, clear it,
                copy it, or download it, Text Utilis has you covered</p>
                
                <a href='https://github.com/Vickyprasad816/Text-utils' target='_blank' rel="noreferrer">  <button type="button" class="btn btn-dark btn-lg shadow-lg" >CASE STUDY</button></a>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col  ">
              <img src={require('../../assests/News .jpg')} alt='Textutils' width='100%' height='100%' />
            </div>
            <div class="col ">
              <h3 className='h3'>DESH-TAK</h3>
              <p className='get'>Desh Tak News is a dynamic web application powered by React.js and integrated with the News API. We
                understand the importance of reliable news sources in today’s fast-paced world, and our platform is
                designed to provide you with a seamless and user-friendly news browsing experience</p>
               
                <a href='https://github.com/Vickyprasad816/Desh-tak' target='_blank' rel="noreferrer">  <button type="button" class="btn btn-dark btn-lg shadow-lg" >CASE STUDY</button></a>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col">
              <img src={require('../../assests/Notecloud.jpg')} alt='Textutils' width='100%' height='100%' />
            </div>
            <div class="col  ">
              <h3 className='h3'>NOTECLOUD</h3>
              <p className='get'>NoteCloud is a versatile web application designed to simplify note-taking and organization, providing
                users with a convenient and secure way to access and manage their notes from anywhere with an
                internet connection.
              </p>
              
              <a href='https://github.com/Vickyprasad816/cloudnote' target='_blank' rel="noreferrer">  <button type="button" class="btn btn-dark btn-lg shadow-lg" >CASE STUDY</button></a>
            </div>
          </div>
        </div>

      </div>
    </div>

  )
}

export default Project