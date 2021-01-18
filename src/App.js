import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import NavBar from './components/navBar/NavBar';
import Container from './components/Container';

//----- option 1

class App extends Component {

  render() {
    return (
      <div id = "main-container">
        <Router>
          <NavBar/>
          <Container/>
        </Router>
      </div>
    )
  }
}

export default App;

// ---- option 2

// export default function App() {

//   return (
//     <div>
//       <h1>hi</h1>
//     </div>
//   )
// }

