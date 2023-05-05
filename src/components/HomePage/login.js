
import './style.css';
export  function MyForm (){
    return (
      <div className='form1'>
      {/* Coding By CodingNepal - youtube.com/codingnepal */}
      <meta charSet="utf-8" />
      <title>Animated Login Form | CodingNepal</title>
      <link rel="stylesheet" href="style.css" />
      <img src="https://s25.postimg.cc/65hsttv9b/cta-arrow.png" alt="" className="flip-box-img"/>
      <div className="center">
        <h1>Login</h1>
        <form method="post">
          <div className="txt_field">
            <input type="text" required />
            <span />
            <label>Username</label>
          </div>
          <div className="txt_field">
            <input type="password" required />
            <span />
            <label>Password</label>
          </div>
          <div className="pass">Forgot Password?</div>

          <div className="button">
                <input type="submit" defaultValue="Login" />
              </div>
          <div className="signup_link">
            Not a member? <a href="./register">Register</a>
          </div>
        </form>
      </div>
    </div>
  );
}

