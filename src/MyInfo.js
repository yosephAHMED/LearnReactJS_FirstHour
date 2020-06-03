import React from 'react';
import './myInfo.css';
// Objective 2
// 1. Create a functional component called MyInfo that returns the following UI
// a. An h1 with your name
// b. A paragraph with a little blurb about yourself
// c. An ordered or unordered list of the top 3 vacation spots you'd like to visit
// 2. Render an instance of that functional component to your browser
// 3. Add some style to your page  

function MyInfo() {
    return (
        <div class="myInfo">
            <h1>Yoseph Ahmed</h1>
            <h2>Task 2</h2>
            <p>Hello. I love Computer Science and going for jogs with friends.</p>
            <ul>
                <li>Tokyo, Japan</li>
                <li>Athens, Greece</li>
                <li>Honolulu, Hawaii</li>
            </ul>
        </div>
    );
}

export default MyInfo;