import './Quizzes.css';


export function Quizzes(){
    return(
      <div className="f7"> 
            
        <h1 className='hh'>Our Quizzes </h1> 
      
        <br></br> <br></br><br></br> <br></br>
       
        <table>
          <tbody><tr>
              <th>name</th>
              
              <th className="action">Action</th>
            </tr>
            <tr>
              <td> </td>
             
              <td><button className="delete">Delete</button>
                <button className="update">Update</button>
              </td>
            </tr>
          </tbody></table>
          <br></br>
          <a href='Add Quiz'>
      <button class="add" >Add New Quiz</button> 
      </a>
      </div>
    );

    
}