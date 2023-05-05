import React from "react";
import AddExam from "./AddExam";
import './Uploadv.css';

const Uploadv = () => {
  return (


<div class="formh-container">
    <form id="uploadv" action="/" className="formh">
    <h3> Upload The Voice... </h3>  
    <input id="audioFileChooser" type="file" onchange="readFile(this.files);" class="btn-3"  />  
    <h3 className="question">Put the answers :</h3>
    <p>First choice</p>
    <textarea rows={2} defaultValue={""} required  className="textareah"/>
    <br />
    <p>Second choice</p>
    <textarea rows={2} defaultValue={""} required className="textareah"/>
    <div className="question-answerh"></div>  
        <h3>The answer is :</h3>
        <div className="question-answerh">
          <label className="labelh">
            <input type="radio" defaultValue={1} name="visited" className="inputh"/> First
          </label>
          <label className="labelh">
            <input type="radio" defaultValue={2} name="visited" className="inputh"/> Second
          </label>
        </div>
        <div className="btn-block">
          <button type="submit" >
            Send
          </button>
        </div>
      </form>
      </div>


  )
}
export default Uploadv;