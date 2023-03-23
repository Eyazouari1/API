import React from 'react';
import {IoIosContact}from 'react-icons/io';
import {AiOutlineMail} from 'react-icons/ai';
import { BiMap} from'react-icons/bi';
const CardListe = ({user}) => {
  console.log(user)
  return (
 
   
    <div className='user' >
         
          {user&& <><div className='second'><IoIosContact/><h2> User Name :{user.name}</h2></div>
         <div className='second'> <BiMap/> <h2>City: {user.address.city}</h2></div>
        
        <div className='second'>  <AiOutlineMail/><h4>Email: {user.email}</h4> </div></>}
   
    </div>
  
      
      
     
    
      
   
         
 
  )
}

export default CardListe


