# CalendarExam
Hi!
So basically, if you're here, you're trying to evaluate mah "skills".
Anyways, this is how it works:
Pop open your sweet baby console and navigate to the /calendarexam directory. Make sure that you're in /calendarexam, and not /CalenderExam.
```
npm install
npm start
```
Anyways, after that, test out the functionality.

# Usage
Okay, please make sure your screen is widescreen and probably 1920x1080 or even 1280x720, otherwise Modal is going to look WEIRD. Unfortunately, I couldn't get it to map properly like CSS.
I think the app itself, being so simple, might seem intuitive, but parts of the application really isn't.

Moving through the dates just requires a simple press of previous and forward. If you're lost, just hit Reset Month. Your events won't be lost until you refresh the page!

# Resetting Events
First, previous and next modify the month--and it'll regenerate an entirely new list. However, the eventItems itself doesn't get reset. Instead, you need to click on Show Months, then click on Reset Events.

# Adding an Event
Please press on any date to Add an Event FOR that date. Otherwise, click outside of the screen. It dismisses will dismiss the modal, and remove all currently edited inputted.

# Deleting an Event
Click on Show Events. It will display all events, along with a corresponding date. Click on it to remove.

# Credits
A large batch of algorithms were found online, such as: creating the date programmatically, and updating a todolist. These algorithms were modified heavily to fit within project constraints.

All visual elements are done through Material-UI.
