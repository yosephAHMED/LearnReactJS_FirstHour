import React from 'react';
import './navbar.css';

// Objective 3
// 1. Set up a navbar component and render it in the App component
// 2. Set up a footer component in a seperate file and render it in the App component

function Navbar() {
    return(
        <div className="navbar">
            <label>Home</label>
            <label>Contact Me</label>
            <label>FAQ</label>
        </div>
    );
}

export default Navbar;