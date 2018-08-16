import React, { Component } from 'react';
import logo from './logo.svg';
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';

class App extends Component {

  getTodaysDate() {
    var date = new Date()
    var dateString = date.toLocaleDateString('us-EN')
    var splitStringArray = str.split("/") // i.e Grab 8, 16, 2018.
    return splitStringArray
  }

  DaysInMonth(props) {
   var daysInMonth = new Date({props.year}, {props.month}, 1).getDate()
   return (
     <h1>The days in the month are: {daysInMonth}</h1>
   )
  }
  transformDate(props) {
    return (

    )
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React {this.getTodaysDate()}</h1>
          <DaysInMonth
            year={this.getTodaysDate()[0]}
            month={this.getTodaysDate()[1]}
          />
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
