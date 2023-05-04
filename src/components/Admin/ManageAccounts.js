import { Dashboard } from './HomePage';
import './ManageAccounts.css';


export function Account(){
    return(
      
      
       
      <div className="f2"> 
            
        <h1 className='h' >Our Accounts </h1> 
     
        <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <table className='t1'>
          <tbody><tr>
              <th>name</th>
              <th>Email</th>
              <th>password</th>
              <th>phone</th>
              <th>status</th>
              <th>Role</th>
              
            </tr>
            <tr>
              <td> </td>
              <td />
              <td> </td>
              <td />
              <td> </td>
              <td />
              
              
            </tr>
          </tbody></table>
          <br></br>
      <a href='addaccount'>
      <button className='a'>Add New Account</button> 
      </a>
      <br></br><br></br>
        <button className='d'> Delete Account </button>
        <br></br><br></br>
        <button className='u'> Update Account  </button>
      </div>
      
    );

    
}

