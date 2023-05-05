
import '../Admin/addaccount.css';

export  function MyForm2 (){
    return (
      
      <div className="f1"> 
        <meta charSet="UTF-8" />
  
        <link rel="stylesheet" href="style.css" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <div className="container">
          <div className="title">Register </div>
          <div className="content">
            <form  action="#">
              <div className="user-details">
                <div className="input-box">
                  <span className="details">Full Name</span>
                  <input type="text" placeholder="Enter name" required />
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