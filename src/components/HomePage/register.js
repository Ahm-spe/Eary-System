import axios from "axios";
import "./register.css";
import { useNavigate } from "react-router-dom";
import '../Admin/addaccount.css';
import { useEffect, useRef, useState } from "react";

export  function MyForm2 (){

  const navigate = useNavigate();

  const [register, setRegister] = useState({
    loading: true,
    result: {},
    err: null,
  });

  const form = useRef({
    name: '',
    email: '',
    password: '',
    phone: '',

  });

  const submit = e => {
    e.preventDefault();
    axios
      .post('http://localhost:4000/register', {
        name: form.current.name.value,
        email: form.current.email.value,
        password: form.current.password.value,
        phone: form.current.phone.value,
     
      })
      .then(() => {
        navigate('/');
      })
      .catch(err => {
        alert(err.response.data.message);
      });
  };


    return (
 
      <div className="f1"> 
        <meta charSet="UTF-8" />
  
        <link rel="stylesheet" href="style.css" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <div className="container">
          <div className="title">Register </div>
          <div className="content">
            <form onSubmit={(e) => submit(e)}>
              <div className="user-details">
                <div className="input-box">
                  <span className="details">Full Name</span>
                  <input    
                        type="text" placeholder="Enter name" required   ref={(val) => {
                          form.current.name = val;
                        }} />
                </div>
                <div className="input-box">
                  <span className="details">Email</span>
                  <input   type="text" placeholder="Enter email" required   ref={(val) => {
                          form.current.email = val;
                        }}/>
                </div>
                <div className="input-box">
                  <span className="details">Phone Number</span>
                  <input   type="text" placeholder="Enter phone number" required   ref={(val) => {
                          form.current.phone = val;
                        }} />
                </div>
                <div className="input-box">
                  <span className="details">Password</span>
                  <input    type="password" placeholder="Enter password" required   ref={(val) => {
                          form.current.password = val;
                        }}/>
                </div>
             
  
              
              </div>
          
              <button type="submit">Submit</button>
             
          
            </form>
    
          </div>
        </div>
      </div>
       
   
       )};