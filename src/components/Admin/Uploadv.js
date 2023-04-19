import React from "react";
import AddExam from "./AddExam";
import './Uploadv.css';

const Uploadv = () => {
  return (


    <form id="uploadv" action="/">
      <h3> Upload The Voice... </h3>
      <input id="audioFileChooser" type="file" onchange="readFile(this.files);" class="btn-3" required />
      <h3 className="question">Put the answers :</h3>
      <p>First choice</p>
      <textarea rows={2} defaultValue={""} required />
      <br />
      <p>Second choice</p>
      <textarea rows={2} defaultValue={""} required />
      <div className="question-answer"></div>
      <h3>The answer is :</h3>
      <div className="question-answer">
        <label>
          <input type="radio" defaultValue={1} name="visited" /> First
        </label>
        <label>
          <input type="radio" defaultValue={2} name="visited" /> Second
        </label>
      </div>
      <div className="btn-block">
        <button type="submit" href="/">
          Send
        </button>
      </div>
    </form>


  )
}
export default Uploadv;