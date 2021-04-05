import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import NavBar from './components/navBar/NavBar';
import Container from './components/Container';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';

class App extends Component {

  render() {
    const theme = createMuiTheme({
      palette: {
        primary: {
          main: '#242424'
        },
        secondary: {
          main: 'rgba(233, 203, 31, 0.822)'
        }
      }
    })

    return (
      <div id = "main-container">
        <Router>
          <ThemeProvider theme = {theme}>
            <NavBar/>
            <Container/>
          </ThemeProvider>
        </Router>
      </div>
    )
  }
}

export default App;
