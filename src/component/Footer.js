import React from 'react'
import {FcGoogle} from 'react-icons/fc';
import {BsFacebook, BsInstagram, BsTwitter}from 'react-icons/bs';

const Footer = () => {
  return (
    <div>
        <hr></hr>
        <div> <div className='h1'>   <h1> contact:</h1> </div>
          
        <div className='footer'><div><FcGoogle/>:google</div><br></br>
       <div><BsFacebook/>:facebook</div><br></br> 
       <div> <BsTwitter/>:twiter</div> <br></br>
        <div><BsInstagram/>: instagram</div>
       

        </div>
        <p> copyright© 2023</p> 
        </div>
        <div className='cont'>
          <p>Bolg</p>
          <p> About us</p>
          <p> service</p>
          <p> project</p>
          

        </div>
    </div>
  )
}

export default Footer