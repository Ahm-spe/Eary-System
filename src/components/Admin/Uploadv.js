import React from "react";
import AddExam from "./AddExam";
import './Uploadv.css';

const Uploadv = () => {
  return (


    <form clasName='fh' id="uploadv" action="/">

      <div className="formbold-form-label-title">Add New Question </div><br></br><hr></hr><br></br>

      <h3 className="hussein"> Upload The Voice... </h3><br></br>
      <input id="audioFileChooser" type="file" onchange="readFile(this.files);" class="btn-3" required />
      <h3 className="question">Put the answers :</h3><br></br>
      <p className="ph">First choice</p>
      <textarea className='th' rows={2} defaultValue={""} required />
      <br />
      <p>Second choice</p>
      <textarea  className='th' rows={2} defaultValue={""} required />

      <div className="question-answer"></div>

      <br></br>

      <h3 className="hussein">The answer is :</h3>
      <br></br>

      <div className="question-answer">

        <label>
          <input className="ih" type="radio" defaultValue={1} name="visited" /> First
        </label>

        <label>
          <input className="ih"type="radio" defaultValue={2} name="visited" /> Second
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