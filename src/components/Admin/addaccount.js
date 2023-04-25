import './addaccount.css'
import { Dashboard } from './HomePage';

export function AddAccount(){
    return(
     
      <div className="f1"> 
        <meta charSet="UTF-8" />
  
        <link rel="stylesheet" href="style.css" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <div className="container">
          <div className="title">Add New Account </div>
          <div className="content">
            <form action="#">
              <div className="user-details">
                <div className="input-box">
                  <span className="details">Full Name</span>
                  <input type="text" placeholder="Enter name" required />
                </div>
                <div className="input-box">
                  <span className="details">Username</span>
                  <input type="text" placeholder="Enter username" required />
                </div>
                <div className="input-box">
                  <span className="details">Email</span>
                  <input type="text" placeholder="Enter email" required />
                </div>
                <div className="input-box">
                  <span className="details">Phone Number</span>
                  <input type="text" placeholder="Enter phone number" required />
                </div>
                <div className="input-box">
                  <span className="details">Password</span>
                  <input type="text" placeholder="Enter password" required />
                </div>
                <div className="input-box">
                  <span className="details">Confirm Password</span>
                  <input type="text" placeholder="Confirm  password" required />
                </div>
              </div>
              <div className="gender-details">
                <input type="radio" name="gender" id="dot-1" />
                <input type="radio" name="gender" id="dot-2" />
                <input type="radio" name="gender" id="dot-3" />
                <span className="gender-title">Role</span>
                <div className="category">
                  <label htmlFor="dot-1">
                    <span className="dot one" />
                    <span className="gender">Admin</span>
                  </label>
                  <label htmlFor="dot-2">
                    <span className="dot two" />
                    <span className="gender">User</span>
                  </label>
                 
                </div>
              </div>
              <div className="button">
                <input type="submit" defaultValue="Submit" />
              </div>
            </form>
            <div>

       
     
    </div>
          </div>
        </div>
      </div>
      
    );
}


