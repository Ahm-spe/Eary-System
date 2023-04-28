import './Header.css';
import React from "react";
import { SlLogout} from "react-icons/sl";
import { BiHistory} from "react-icons/bi";
import { GrUpdate} from "react-icons/gr";
import {TfiWrite} from "react-icons/tfi";
import { Link } from "react-router-dom";

export const AppHeader = ()=>{
 
    return (
        <>
        
        <div className="bg-img">
        <nav className="navbar">
        <Link><SlLogout size={25}/> LogOut </Link>
        <Link to={'/User/History'}><BiHistory size={28}/>History Of Your Exams</Link>
        <Link to={'/User/Update'}  ><GrUpdate size={25}/>Update Profile</Link>
        <Link to={'/User'}> <TfiWrite size ={23}/>Exams</Link>

        </nav>
        </div>
      </>
    );
  }