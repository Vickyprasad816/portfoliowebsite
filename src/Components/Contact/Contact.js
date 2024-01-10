import React from 'react'
import './Contact.css';

function Contact() {
  return (
    <div className='Contact' id='contact'>
      <h3 className='h3 text-center'>Contact</h3>
      <hr className='seperate' />
      <p className='p1 text-center'>Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</p>
      <div class="container">
    <div class="row justify-content-center">
      <div class=" form col-md-6 box ">
        <form>
          <div className="group">
            <label for="exampleFormControlInput1" className='mb-2'>Name</label>
            <input type="text" class="form-control px-3 py-3 " id="exampleFormControlInput1" placeholder="Enter Your Name"/>
            </div>
          <div className="group">
            <label for="exampleFormControlPassword1" className='mb-2'>Email</label>
            <input type="email" class="form-control px-3 py-3 " id="exampleFormControlPassword1" placeholder="Enter Your Email"/>
            </div>
            <div className="group ">
            <label for="exampleFormControlPassword1" className='mb-2'>Message</label>
            <input type="text" class="form-control px-3 py-3 " id="exampleFormControlPassword1" placeholder="Enter Your Message" />
            </div>
          <div className="button d-flex justify-content-end"><button type="submit" class="btn btn-primary btn-sm ">SUBMIT</button></div>
         
        </form>
      </div>
    </div>
  </div>
  </div>

  )
}

export default Contact