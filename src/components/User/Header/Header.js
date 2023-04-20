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
        
        <div class="bg-img">
        <navbar class="navbar">
        <Link><SlLogout size={25}/> LogOut </Link>
        <Link to={'/History'}><BiHistory size={28}/>History Of Your Exams</Link>
        <Link to={'/Update'}  ><GrUpdate size={25}/>Update Profile</Link>
        <Link to={'/'}> <TfiWrite size ={23}/>Exams</Link>

        </navbar>
        </div>
      </>
    );
  }