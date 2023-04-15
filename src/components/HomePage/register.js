
import './register.css';

export  function MyForm2 (){
    return (
   

        <div className="box-form">
          <div className="left">
            <div className="overlay">
              <h1>Eary System.</h1>s
              <p>The Website called "Eary", which help people to check their hearing problems.</p>
              
            </div>
          </div>
          <div className="right">
            <h5>Register</h5>
          
            <div className="inputs">
              <input type="name" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <br />
              <input type="password" placeholder="password" />
              <br />
              <input type="phone" placeholder="Phone Number" />
              <br />
            
              <br />
             
            </div>
            <br /><br />
           
            <br />
            <button>Register</button>
          </div>
        </div>
      );
}