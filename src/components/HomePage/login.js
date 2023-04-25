
import './style.css';

export  function MyForm (){
    return (
   
<div className="ff">
      <meta charSet="UTF-8" />
      <title>Login Page in HTML with CSS Code Example</title>
      <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" />
      <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossOrigin="anonymous" /><link rel="stylesheet" href="./style.css" />
      {/* partial:index.partial.html */}
      <div className="box-form">
        <div className="left">
          <div className="overlay">
            <h1>Hello World.</h1>
            <p>The Website called "Eary", which help people to check their hearing problems.</p>

            <span>
              <p>login with social media</p>
            
              <a href="register"><i className="fa fa-twitter" aria-hidden="true" /> Create Account</a>
            </span>
          </div>
        </div>
        <div className="right">
          <h5>Login</h5>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <p>Don't have an account? <a href="register">Create Your Account</a> it takes less than a minute</p>
          <div className="inputs">
            <input type="text" placeholder="user name" />
            <br />
            <input type="password" placeholder="password" />
          </div>
          <br /><br />
          <div className="remember-me--forget-password">
            {/* Angular */}
            <label>
              <input type="checkbox" name="item" defaultChecked />
              <span className="text-checkbox">Remember me</span>
            </label>
            <p>forget password?</p>
          </div>
      
          <button>Login</button>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      
      {/* partial */}
</div>
  );
}
