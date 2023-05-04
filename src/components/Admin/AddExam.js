import React, { useState } from 'react'
// import styled from 'vscode-styled-components';
import './AddExam.css'

export function AddExam() {


    return (


        <>
            <div class="formbold-main-wrapper">

                <div class="formbold-form-wrapper">

                    <form className='container' >
                        <div class="formbold-input-group">

                            <div className="formbold-form-label-title">Add New Account </div><br></br><hr></hr><br></br>

                            <label for="name" class="formbold-form-label"> Exam ID </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Enter exam ID"
                                class="formbold-form-input"
                            />
                        </div>

                        <div class="formbold-input-group">
                            <label for="name" class="formbold-form-label"> Subject Name </label>
                            <input
                                type="text"
                                name="lastname"
                                id="email"
                                placeholder="Enter subject name"
                                class="formbold-form-input"
                            />
                        </div>

                        <div class="formbold-input-group">
                            <label for="age" class="formbold-form-label"> Description </label>
                            <input
                                type="text"
                                name="age"
                                id="age"
                                placeholder="Description"
                                class="formbold-form-input"
                            />
                        </div>

                        <div class="formbold-input-group">
                            <label for="age" class="formbold-form-label"> Doctor Email </label>
                            <input
                                type="text"
                                name="age"
                                id="age"
                                placeholder="xyz@example.com"
                                class="formbold-form-input"
                            />
                        </div>

                        <div class="formbold-input-group">
                            <label class="formbold-form-label">
                                Status
                            </label>

                            <select class="formbold-form-select" name="occupation" id="occupation">
                                <option value="Available">Available</option>
                                <option value="Unavailable">Unavailable</option>

                            </select>
                        </div>

                        <div class="formbold-input-group">
                            <label class="formbold-form-label">
                                Time of Exam
                            </label>

                            <select class="formbold-form-select" name="occupation" id="occupation">
                                <option value="30 min">30 min</option>
                                <option value="45 min">45 min</option>
                                <option value="1 hour">1 hour</option>
                                <option value="90 mins">90 mins</option>

                            </select>
                        </div>




                        {/* <div>
                            <label for="message" class="formbold-form-label">
                                Any comments or suggestions
                            </label>
                            <textarea
                                rows="6"
                                name="message"
                                id="message"
                                placeholder="Type here..."
                                class="formbold-form-input"
                            ></textarea>
                        </div> */}

                        <button class="formbold-btn">Submit</button>
                        <button class="formbold-btn" routerlink="home">Make Exam</button>
                        <button class="formbold-btn">Cancel</button>
                    </form>
                </div>
            </div>
        </>



    );
}
export default AddExam;