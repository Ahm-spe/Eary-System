import './HomePage.css';

export function Dashboard(){
    return (
        <div classname="f9">
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style dangerouslySetInnerHTML={{__html: "\n.f9 {\n  font-family: \"Lato\", sans-serif;\n}\n\n.sidenav {\n  height: 100%;\n  width: 160px;\n  position: fixed;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  background-color: #111;\n  overflow-x: hidden;\n  padding-top: 20px;\n}\n\n.sidenav a {\n  padding: 6px 8px 6px 16px;\n  text-decoration: none;\n  font-size: 25px;\n  color: #818181;\n  display: block;\n}\n\n.sidenav a:hover {\n  color: #f1f1f1;\n}\n\n.main {\n  margin-left: 160px; /* Same as the width of the sidenav */\n  font-size: 28px; /* Increased text to enable scrolling */\n  padding: 0px 10px;\n}\n\n@media screen and (max-height: 450px) {\n  .sidenav {padding-top: 15px;}\n  .sidenav a {font-size: 18px;}\n}\n" }} />
        <div className="sidenav">
        <br></br><br></br><br></br><br></br><br></br>
         
          <a href='Quizzes'>Quizzes </a>
          <br></br>
          <a href='ManageAccounts'>Accounts</a>
          <br></br>
          <a href="#contact">Settings</a>
          <br></br><br></br><br></br>
        </div>
      
      </div>

    );
   
}