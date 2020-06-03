import React from 'react';
// Objective 1
// Fill in the boilerplate React code required to render an
// unordered list (<ul>) to the page. The list should contain 3 list items
// (<li>) with anything in them you want.

function App() {
  return (

    // To fix "JSX Expressions must have one parent element error,"
    // I can enclose all tags in a div, or comment out the <h1> tag

    <div>
      <h1>Hello world!</h1>
      <ul>
        <li>Peaches</li>
        <li>Apples</li>
        <li>Bananas</li>
      </ul>
    </div>
  );
}

export default App;