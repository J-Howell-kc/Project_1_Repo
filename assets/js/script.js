Navigator.geolocation;
  function success(position) {
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    console.log(lat);
    console.log(lon);
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=217731b2c4c4604614a6ee76ea8b8b9d&units=imperial`)
            .then((response) => response.json())
            .then((data) =>{ 
            console.log(data);
            var curTemp = data.list[0].main.temp;  
            console.log(curTemp)
            })
  }
  function error() {
    //alert('Sorry, no position available.');
    // Make weather card say "weather data not available"
  }
  const options = {
    enableHighAccuracy: true,
    maximumAge: 30000,
    timeout: 27000
  };
  const watchID = navigator.geolocation.watchPosition(success, error, options);

  /* function weather(position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=217731b2c4c4604614a6ee76ea8b8b9d&units=imperial`)
            .then((response) => response.json())
            .then((data) =>{ 
            var curTemp = data.list[0].temp;  
            console.log(curTemp)
            })};
    */
//js of Planner//
var timeDisplayEl = $('#time-display');
var eventDisplayEl = $('#event-display');
var eventModalEl = $('#event-modal');
var eventFormEl = $('#event-form');
var eventNameInputEl = $('#event-name-input');
var eventTimeInputEl = $('#event-time-input');
var eventLocationInputEl = $('#event-location-input');
var dueDateInputEl = $('#due-date-input');  

function displayTime() {
  var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
  timeDisplayEl.text(rightNow);
}

//may adding weather//

function printEventData(name, time, eventLocation, dueDate) {
  var eventRowEl = $('<tr>');

  var eventNameTdEl = $('<td>').addClass('p-2').text(name);

  var eventTimeTdEl = $('<td>').addClass('p-2').text(time);

  var locationTdEl = $('<td>').addClass('p-2').text(eventLocation);

  var dueDateTdEl = $('<td>').addClass('p-2').text(dueDate);

  var daysToDate = moment(dueDate, 'MM/DD/YYYY').diff(moment(), 'days');

  var daysLeftTdEl = $('<td>').addClass('p-2').text(daysToDate);


  var deleteEventBtn = $('<td>')
    .addClass('p-2 delete-event-btn text-center')
    .text('X');

  eventRowEl.append(
    eventNameTdEl,
    eventTimeTdEl,
    locationTdEl,
    dueDateTdEl,
    daysLeftTdEl,
    deleteEventBtn
  );

  eventDisplayEl.append(eventRowEl);

  eventModalEl.modal('hide');
}

function handleDeleteEvent(event) {
  console.log(event.target);
  var btnClicked = $(event.target);
  btnClicked.parent('tr').remove();
}

function handleEventFormSubmit(event) {
  event.preventDefault();

  var eventName = eventNameInputEl.val().trim();
  var eventTime = eventTimeInputEl.val().trim();
  var eventLocation = eventLocationInputEl.val().trim();
  var dueDate = dueDateInputEl.val().trim();

  printEventData(eventName, eventTime, eventLocation, dueDate);

  eventFormEl[0].reset();
}

eventFormEl.on('submit', handleEventFormSubmit);
eventDisplayEl.on('click', '.delete-event-btn', handleDeleteEvent);
dueDateInputEl.datepicker({ minDate: 1 });

setInterval(displayTime, 1000);
//end js of planner//