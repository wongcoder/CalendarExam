import React, { Component } from 'react';
import logo from './logo.svg';
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';

function Year(props) {

}
function Month(props) {

}
function Days(props) {
}

class App extends Component {
  getTodaysDate() {
    var date = new Date()
    return date.toLocaleDateString('us-EN')
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React {this.getTodaysDate()}</h1>

        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
