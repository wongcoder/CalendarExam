import React, { Component } from "react";
import logo from "./logo.svg";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import dateFns from "date-fns";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Modal from "@material-ui/core/Modal";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

const styles = theme => ({
  root: {
    flexGrow: 1,
    paddingTop: theme.spacing.unit * 4
  },
  headerSpacer: {
    paddingTop: theme.spacing.unit * 2
  },
  control: {
    padding: theme.spacing.unit * 2
  },
  date: {
    padding: theme.spacing.unit * 2
  },
  paper: {
    position: "absolute",
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4
  }
});

class EventObjects extends Component {

  createEvents(item) {
    const dateFormat = 'MM/DD/YYYY'
    return (
      <ListItem button>
        {item.text} due on {dateFns.format(item.key, dateFormat)}
      </ListItem>
    )
  }

  render() {
    var eventArray = this.props.arrayOfEvents
    var eventMapper = eventArray.map(this.createEvents)

    return (
      <List>
        {eventMapper}
      </List>
    )
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.addEvent = this.addEvent.bind(this);
    this.state = {
      currentMonth: new Date(), // Date() initializes it to the current date and time, intead of having to manually getTodaysDate().
      selectedDate: new Date(),
      eventItems: [],
      openAddEvents: false,
      openShowEvents: false
    };
  }

  addEvent(e) {
    if (this._inputElement.value !== "") { // value not blank?
      var newItem = {
        text: this._inputElement.value,
        key: this.state.selectedDate
      }

      this.setState((prevState) => {
        return {
          eventItems: prevState.eventItems.concat(newItem)
        };
      });

      this._inputElement.value = ""; // reset value back to empty
    }

    e.preventDefault(); // Prevent refresh
    console.log(this.state.eventItems);
    console.log(this.selectedDate);
    console.log(this._inputElement.value)
  }

  handleEventBeingAdded(eventItems) {
    this.setState({
      eventItems: [...this.state.items, this.state.term]
    });
  }
  // Event Handlers
  previousMonth = () => {
    // Equivalent to previousMonth(), just don't wanna write (), also tutorial I followed used this lOL
    this.setState({
      currentMonth: dateFns.subMonths(this.state.currentMonth, 1) // Provides an alternative instead of using minus minus, allowing me to use a date object.
    });
  };

  nextMonth = () => {
    this.setState({
      currentMonth: dateFns.addMonths(this.state.currentMonth, 1)
    });
  };

  resetMonth = () => {
    this.setState({
      currentMonth: new Date() // Garbage collection if you dont' catch this I swear to f
    });
  };

  closeAddModal = () => {
    this.setState({
      openAddEvents: false
    });
  };

  closeShowModal = () => {
    this.setState({
      openShowEvents: false
    });
  };

  handleClick = dateProvided => {
    this.setState({
      selectedDate: dateProvided,
      openAddEvents: true
    });
  };

  handleShow = () => {
    this.setState({
      openShowEvents: true
    });
  };

  renderHeader() {
    const dateFormat = "MMMM YYYY";
    return (
      <div className="dateHeader">
        <Grid container justify="center">
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
    );
  }

  renderDayColumns() {
    // Programmatically rendering instead of writing Sunday, Monday, Tuesday... folliwng tutorial, is optional.
    const dateFormat = "dddd"; // Consider putting this as a global variable later on
    const days = [];
    const { classes } = this.props;

    let startDate = dateFns.startOfWeek(this.state.currentMonth);

    for (let i = 0; i < 7; i++) {
      days.push(
        <Grid item key={i}>
          <Typography>
            {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
          </Typography>
        </Grid>
      );
    }
    return (
      <Grid container justify="center" spacing={40} className={classes.control}>
        {days}
      </Grid>
    );
  }

  generateGrid() {
    // generates all the little squares we need
    const { currentMonth, selectedDate } = this.state; // Grab state
    const { classes } = this.props;
    // All date manipulation "functions"
    const monthStart = dateFns.startOfMonth(currentMonth);
    const monthEnd = dateFns.endOfMonth(monthStart);
    const startDate = dateFns.startOfWeek(monthStart);
    const endDate = dateFns.endOfWeek(monthEnd);

    const dateFormat = "D";
    const rows = [];

    let days = [];
    let day = startDate;

    while (day <= endDate) {
      // While an X start of the week is LESS than the end of the startOfWeek
      for (let i = 0; i < 7; i++) {
        let formattedDate = dateFns.format(day, dateFormat);
        const dateStorage = day; // This would otherwise end up being the start of week every single time

        days.push(
          <Card key={i}>
            <CardContent>
              <Typography
                variant="headline"
                component="h2"
                color={
                  !dateFns.isSameMonth(day, monthStart)
                    ? "secondary"
                    : "default"
                }
                padding={200}
              >
                {formattedDate}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                onClick={() => this.handleClick(dateFns.parse(dateStorage))}
              >
                Add Events
              </Button>
            </CardActions>
          </Card>
        );
        day = dateFns.addDays(day, 1);
      } // Iterate 1 inside of the loop, so that you end up with a NEW start of the week.
      rows.push(
        // Store the array into a row:
        <Grid container spacing={16} className={classes.control} key={day}>
          {days}
        </Grid>
      );
      days = [];
    } // Reset days to zero. Might not be best solution here if garbage collection doesn't detect it.

    return <Grid table="table">{rows}</Grid>;
  }

  render() {
    const { classes } = this.props;
    const userSelectedDate = this.state.selectedDate;
    return (
      <div className="App">
        <Grid container className={classes.root} justify="center">
          <Paper>
            <Grid item xs={12} className={classes.headerSpacer}>
              {this.renderHeader()}
            </Grid>
            <Grid item xs={12}>
              {this.renderDayColumns()}
            </Grid>
            <Grid item>{this.generateGrid()}</Grid>
            <Grid container>
              <Grid item>
                <Button onClick={this.resetMonth}>This Month</Button>
              </Grid>
              <Grid item>
                <Button onClick={this.handleShow}>Show Events</Button>
              </Grid>
            </Grid>

            <Modal
              open={this.state.openAddEvents}
              onClose={this.closeAddModal}
              className="addEventModal"
            >
              <div
                className={classes.paper}
                style={{ transform: `translate(170%, 100%)` }}
              >
                <form onSubmit={this.addEvent}>
                  <input
                    ref={(a) => this._inputElement = a}
                    placeholder="Please enter an event."
                  />
                  <Typography>{dateFns.format(userSelectedDate)}</Typography>
                  <Button type="submit">Add Event</Button>
                </form>
              </div>
            </Modal>

            <Modal
              open={this.state.openShowEvents}
              onClose={this.closeShowModal}
              className="showEventModal"
            >
              <div
                className={classes.paper}
                style={{ transform: `translate(170%, 100%)` }}
              >
                  <Typography> You are in Show Events. </Typography>
                  <EventObjects arrayOfEvents={this.state.eventItems}/>
              </div>
            </Modal>
          </Paper>
        </Grid>
      </div>
    );
  } // I'll make a better documentation describing how this all connects together probably in the README.md
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);
