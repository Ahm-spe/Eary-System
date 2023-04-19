import React from "react";
import './Nav.css'
import AddExam from "./AddExam";
import Home from "./Home";

const Nav = () => {
    return (
        <div className="navbar">



            <a href="#" className="logo">logo</a>

            <ul >
                <a href="/">Home</a>
                <a href="/addexam">Add Exam</a>
            </ul>
        </div>

    )

}

export default Nav;