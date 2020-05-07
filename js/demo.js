'use strict'

// Goal: make it so that I can create object instance from a form

// global array to store all object instances

// constructor function
  // name
  // story
  // freetime
  // push into array

// listen for when the form is submitted - listener
// function that will handle the submit - handler
  // get all the information from the form
    // name
    // story
    // freetime

    // use that to make a new object instance

/////////////////////////////////////////////////////////////

// select the element that I am going to listen on
var form = document.getElementById('form');
var allPeople = [];

function Person(name, story){
  this.name = name;
  this.story = story;

  allPeople.push(this);
}

// set up our event handler (takes in 'e' which = 'event')
function handleFormSubmit(e){
  event.preventDefault();

  var name = event.target.username.value;
  var story = event.target.story.value;
  console.log('name and story ', name, story);

  new Person(name, story);
}

// set up my event listener
  // element.addEventListener('event', callBackFunction)
  // addEventListener takes 2 parameters
    // 1. the event
    // 2. the function that we want to run when we hear the event
form.addEventListener('submit', handleFormSubmit);

// we already have global variables, constructor function

// need to set up listeners, handler and then put at bottom, listener goes at very bottom
