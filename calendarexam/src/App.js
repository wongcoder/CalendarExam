import React, { Component } from 'react';
import logo from './logo.svg';
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import dateFns from 'date-fns';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'

class App extends Component {

  state = {
    currentMonth: new Date(), // Date() initializes it to the current date and time, intead of having to manually getTodaysDate().
    selectedDate: new Date()
  }

  // Event Handlers
  previousMonth = () => { // Equivalent to previousMonth(), just don't wanna write (), also tutorial I followed used this lOL
    this.setState({
      currentMonth: dateFns.subMonths(this.state.currentMonth, 1) // Provides an alternative instead of using minus minus, allowing me to use a date object.
    })
  }

  nextMonth = () => {
    this.setState({
      currentMonth: dateFns.addMonths(this.state.currentMonth, 1)
    })
  }

  resetMonth = () => {
    this.setState({
      currentMonth: new Date() // Garbage collection if you dont' catch this I swear to f
    })
  }

  renderHeader() {
    const dateFormat = "MMMM YYYY";

    return (
      <div className="dateHeader">
        <Grid container spacing={16}>
          <Grid item>
            <Button variant="contained" color="primary" onClick={this.previousMonth}>Previous</Button>
          </Grid>
          <Grid item>
            <Typography variant="headline" component="h2">
              {dateFns.format(this.state.currentMonth, dateFormat)}
            </Typography>
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary" onClick={this.nextMonth}>Next</Button>
          </Grid>
          <Grid item>
            <Button onClick={this.resetMonth}>Reset</Button>
        </Grid>
      </div>
    )
  }

  dateCard(props) {
    return (
      <Card className="Date">
        <CardContent>
          <Typography variant="headline" component="h2">
            {this.props.dateNumber}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">See Events</Button>
        </CardActions>
      </Card>
    )
  }

  generateGrid() { // generates all the little squares we need
    return(
      <Grid table>
      </Grid>
    )
  }


  render() {
    return (
      <div className="App">
        <Grid container className="something">
          {this.renderHeader()}
        </Grid>
      </div>
    );
  }
}

export default App;
