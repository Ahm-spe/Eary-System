import React, { useState } from 'react'
// import styled from 'vscode-styled-components';
import './AddExam.css'

function AddExam() {


    return (

        <>
            <>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <style
                    dangerouslySetInnerHTML={{
                        __html:
                            '\nbody {\n background-color:white, font-family: Times, Helvetica, sans-serif;\n  background-color: black;\n}\n\n* {\n  box-sizing: border-box;\n}\n\n/* Add padding to containers */\n.container {\n  padding: 16px;\n  background-color: white;\n}\n\n/* Full-width input fields */\ninput[type=text], input[type=password] {\n  width: 100%;\n  padding: 15px;\n  margin: 5px 0 22px 0;\n  display: inline-block;\n  border: none;\n  background: #f1f1f1;\n}\n\ninput[type=text]:focus, input[type=password]:focus {\n  background-color: #ddd;\n  outline: none;\n}\n\n/* Overwrite default styles of hr */\nhr {\n  border: 1px solid #f1f1f1;\n  margin-bottom: 25px;\n}\n\n/* Set a style for the submit button */\n.registerbtn {\n  background-color: #04AA6D;\n  color: white;\n  padding: 16px 20px;\n  margin: 8px 0;\n  border: none;\n  cursor: pointer;\n  width: 100%;\n  opacity: 0.9;\n}\n\n.registerbtn:hover {\n  opacity: 1;\n}\n\n/* Add a blue text color to links */\na {\n  color: dodgerblue;\n}\n\n/* Set a grey background color and center the text of the "sign in" section */\n.signin {\n  background-color: #f1f1f1;\n  text-align: center;\n}\n'
                    }}
                />
                <form className='general' action="/action_page.php">
                    <div className="container">
                        <h1>ِAdd Exam</h1>

                        <hr />
                        <label>
                            <b>Exam ID</b>
                        </label>
                        <input
                            type="text"
                            placeholder="Exam ID"
                            id="id"
                            required=""
                        />
                        <label>
                            <b>Subject Name</b>
                        </label>
                        <input
                            type="text"
                            placeholder="Subject Name"
                            id="subject"
                            required=""
                        />
                        <label>
                            <b>Description</b>
                        </label>
                        <input
                            className='textbox'
                            type="text"
                            placeholder="Description"
                            id="description"
                            required=""
                        />

                        <label>
                            <b>Doctor Email</b>
                        </label>
                        <input
                            className='textbox'
                            type="text"
                            placeholder="xyz@example.com"
                            id="doc-mail"
                            required=""
                        />

                        <label >
                            <b >Status</b> <br />

                        </label>
                        <select className='dropdown'>
                            <option value="Available">Available</option>
                            <option value="Unavailable">Unavailable</option>
                        </select>
                        <hr />

                        <label >
                            <b >Time of Exam</b> <br />

                        </label>
                        <select className='dropdown'>
                            <option value="30 min">30 min</option>
                            <option value="45 min">45 min</option>
                            <option value="1 hour">1 hour</option>
                            <option value="90 mins">90 mins</option>
                        </select>
                        <hr />

                        <button type="submit" className="primary">
                            Submit
                        </button>

                        <button className="primary" href="Uploadv">

                            Make Exam
                        </button>

                        <button className="secondary">

                            Cancel
                        </button>
                    </div>

                </form>
            </>

        </>

    )
}
export default AddExam;