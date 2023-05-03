import './Update.css';
import { BsFillPersonFill } from 'react-icons/bs';
import {MdEmail} from 'react-icons/md';
import {RiLockPasswordFill} from 'react-icons/ri';
import {BsTelephoneFill} from 'react-icons/bs';
import React from "react";
import { Link } from 'react-router-dom';
export const AppUpdate = () => {
    return (
       <>
       <div className="login-box">
  <h1><BsFillPersonFill size={39} style={{position:"relative" ,bottom : "-7px"}} />Your Profile</h1>
  <form >
    <div className="user-box">
      <input type="text" name="" required/>
      <label>Username</label>
    </div>
    <div className="user-box">
      
      <input type="text" name=""  required/>
      <label><MdEmail  size={18} style={{position:"relative" ,bottom : "-2px"}}/>Email</label>
    </div>
    <div className="user-box">
    <div className="form__field">
      <input type="password" name="" pattern=".{5,}"required/>
      <span className="icon"></span>
      <label><RiLockPasswordFill size={18} style={{position:"relative" ,bottom : "-2px"}}/>Password</label>
      </div>
    </div>
    <div className="user-box">
      <input type="tel" name="" required/>
      <label><BsTelephoneFill size={15} style={{position:"relative" ,bottom : "0px"}}/>Phone</label>
    </div>
    
    <Link href="#">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Update
    </Link>
    
   
  </form>
</div>
       </> 
    );


}