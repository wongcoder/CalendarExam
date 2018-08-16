import React, { Component } from 'react';
import logo from './logo.svg';
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class App extends Component {

  getTodaysDate() {
    var date = new Date()
    var dateString = date.toLocaleDateString('us-EN')
    var splitStringArray = str.split("/") // i.e Grab 8, 16, 2018.
    return splitStringArray
  }

  daysInMonth(year, month) {
    var daysInMonth = new Date({props.year}, {props.month}, 1).getDate()
  }

  generateGrid() {
    return(
      <Grid table
    )
  }


  render() {
    return (
      <div className="App">
        <Grid container className={}
      </div>
    );
  }
}

export default App;
