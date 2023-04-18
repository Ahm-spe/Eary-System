import './ManageAccounts.css';


export function Account(){
    return(
      <div className="f2"> 
            
        <h1 >Our Accounts </h1> 
      <a href='addaccount'>
      <button class="add" >Add New Account</button> 
      </a>
        <br></br>
        <br></br>
        <table>
          <tbody><tr>
              <th>name</th>
              <th>Email</th>
              <th>password</th>
              <th>phone</th>
              <th>status</th>
              <th>Role</th>
              <th className="action">Action</th>
            </tr>
            <tr>
              <td> </td>
              <td />
              <td> </td>
              <td />
              <td> </td>
              <td />
              <td><button className="delete">Delete</button>
                <button className="update">Update</button>
              </td>
            </tr>
          </tbody></table>
      </div>
    );

    
}