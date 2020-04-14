import React, { Component } from 'react';
import './App.css';
import College from './Components/college';
import Student from './Components/student';



// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
      <Student name="Kobe Bryant" number="11111" enrolled="Shooting"/>
      <Student name="Lebron James" number="22222" enrolled="Dribbling"/>
      <Student name="Kevin Durant" number="33333" enrolled="Passing"/>
      <College name="NBA Academy" location="Toronto, ON"/>
      </div>
     );
  }
}


export default App;
