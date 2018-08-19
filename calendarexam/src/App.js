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

const styles = theme => ({
  root: {
    flexGrow: 1,
    paddingTop: theme.spacing.unit * 20,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
});

function DateCard(props) {
  return (
    <Card className="date">
      <CardContent>
        <Typography variant="headline" component="h2">
          {props.dateNumber}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">See Events</Button>
      </CardActions>
    </Card>
  );
}

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
        <Grid container>
          <Grid item>
            <Button onClick={this.previousMonth}>Previous</Button>
          </Grid>
          <Grid item>
            <Typography variant="headline" component="h2">
              {dateFns.format(this.state.currentMonth, dateFormat)}
            </Typography>
          </Grid>
          <Grid item>
            <Button onClick={this.nextMonth}>Next</Button>
          </Grid>

        </Grid>
      </div>
    )
  }

  renderDayColumns() {
    const dateFormat = "dddd" // Consider putting this as a global variable later on
    const days = []

    let startDate = dateFns.startOfWeek(this.state.currentMonth)

    for(var i = 0; i < 7; i++) {
      days.push(
        <Grid item>
          <div className="col col-center" key={i}>
            <DateCard dateNumber={dateFns.format(dateFns.addDays(startDate, i), dateFormat)}/>
          </div>
        </Grid>
      )
    }
    return (
      <Grid container>
          {days}
      </Grid>

    )
  }



  generateGrid() { // generates all the little squares we need
    return (
      <Grid table="table"></Grid>
    )
  }


  render() {
    const { classes } = this.props

    return (
      <div className="App">
        <Grid container className={classes.root} justify="center">
          {this.renderHeader()}
          <Grid item xs={12}>
            {this.renderDayColumns()}
            </Grid>

          <Grid item>
            <Button onClick={this.resetMonth}>Reset</Button>
          </Grid>
        </Grid>
      </div>
    )
  }

}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
