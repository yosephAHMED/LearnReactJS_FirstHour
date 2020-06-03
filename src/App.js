import React from 'react';
import MyInfo from './components/MyInfo';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Objective 1
// Fill in the boilerplate React code required to render an
// unordered list (<ul>) to the page. The list should contain 3 list items
// (<li>) with anything in them you want.

function App() {
  const firstName = "Yoseph";
  const date = new Date();
  let hours = date.getHours();
  let timeOfDay;
  const styles = {
    //color: "blue", 
    backgroundColor: "red",
    fontSize: "55px"
  };

  // dynamic styling with time of day
  if (hours < 12){
    // hours is still morning
    styles.color = "cyan";
  } else if (hours >= 12 && hours < 17) {
    // hours is evening
    styles.color = "orange";
  } else {
    // hours is night
    styles.color = "black";
  }
  
  return (

    // To fix "JSX Expressions must have one parent element error,"
    // I can enclose all tags in a div, or comment out the <h1> tag

    <div>
      <Navbar />

      <h1>Hello world!</h1>
      <h2>Hello {firstName}</h2>
      {/* get time (24hrs) % 12 from date reference */}
      <h3 style={styles}>It is currently about {hours % 12} o'clock!</h3>
      <ul>
        <li>Peaches</li>
        <li>Apples</li>
        <li>Bananas</li>
      </ul>

      <MyInfo />

      <Footer />
    </div>
  );
}

export default App;