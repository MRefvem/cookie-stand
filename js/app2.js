'use strict'

// Lab: Salmon Cookies Pt. 2

// Instructions
// 1. Create a new branch for today's lab. Make sure it has all of your changes from lab 06 so that you can extend the functionality. (complete)
// 2. Replace all of your object literals for the salmon cookie stand with a single constructor function that, when called with the 'new' keyword, creates a new instance. (halfway there)
// 3. Replace the lists of your data for each store and build a single table of data instead. Display each store's data in a table format. Break each column by the hour and complete each row with a "Daily Location Total". (Started, but failed to get anything to render on the page)

var hoursOfOperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'total'];

function Location(name, minCustomers, maxCustomers, avgCookies, customersPerHour, cookiesPerHour, dailyTotal){
  this.name = name;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers,
  this.avgCookies = avgCookies;
  this.hoursOfOperation = hoursOfOperation;
  this.customersPerHour = customersPerHour;
  this.cookiesPerHour = cookiesPerHour;
  this.dailyTotal = dailyTotal;
};

Location.prototype.randomCustomersPerHour = function(){
  for (var i = 0; i < this.hoursOfOperation.length; i++){
    var randomCustomers = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
    this.customersPerHour.push(randomCustomers);
  }
  console.log(this.name, 'Customers per hour',this.customersPerHour);
};

Location.prototype.findCookiesPerHour = function(){
  for (var i = 0; i < this.hoursOfOperation.length-1; i++){
    var perHour = Math.round(this.avgCookies * this.customersPerHour[i]);
    this.cookiesPerHour.push(perHour);
    this.dailyTotal = this.dailyTotal + perHour;
  }
  console.log(this.name, 'Cookies per hour', this.cookiesPerHour);
};

Location.prototype.sumCookiesPerDay = function(){
  var dailyTotal = 0;
  for (var i = 0; i < this.cookiesPerHour.length; i++) {
    dailyTotal = this.cookiesPerHour[i] + dailyTotal;
  }
  console.log(this.name, 'Cookies per day', this.dailyTotal);
  this.cookiesPerHour.push(dailyTotal);
};

Location.prototype.render = function(){
  var parent = document.getElementById('seattle-sales-data');
  var listItem = document.createElement('p');
  listItem.textContent = this.name;
  parent.appendChild(listItem);
};

Location.prototype.renderList = function(){
  var parent = document.getElementById('seattle-sales-data');
  for (var i = 0; i < this.hoursOfOperation.length; i++){
    var listItem = document.createElement('li');
    listItem.textContent = (`${this.hoursOfOperation[i]}: ${this.cookiesPerHour[i]} cookies`);
    parent.appendChild(listItem);
    // Experimenting with trying to call all of my functions here in an effor to try to save some space further down.
    // this.name.randomCustomersPerHour();
    // this.name.findCookiesPerHour();
    // this.name.sumCookiesPerDay();
    // this.name.render();
  }
};

// My variables. I wish I didn't have to write out the entire hoursOfOperation array to get things to work.
var seattle = new Location('Seattle', 23, 65, 6.3, ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'total'], [], [], 0);
var tokyo = new Location('Tokyo', 3, 24, 1.2, ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'total'], [], [], 0);
var dubai = new Location('Dubai', 11, 38, 3.7, ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'total'], [], [], 0);
var paris = new Location('Paris', 20, 38, 2.3, ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'total'], [], [], 0);
var lima = new Location('Lima', 2, 16, 4.6, ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'total'], [], [], 0);

seattle.randomCustomersPerHour();
seattle.findCookiesPerHour();
seattle.sumCookiesPerDay();
seattle.render();
seattle.renderList();

tokyo.randomCustomersPerHour();
tokyo.findCookiesPerHour();
tokyo.sumCookiesPerDay();
tokyo.render();
tokyo.renderList();

dubai.randomCustomersPerHour();
dubai.findCookiesPerHour();
dubai.sumCookiesPerDay();
dubai.render();
dubai.renderList();

paris.randomCustomersPerHour();
paris.findCookiesPerHour();
paris.sumCookiesPerDay();
paris.render();
paris.renderList();

lima.randomCustomersPerHour();
lima.findCookiesPerHour();
lima.sumCookiesPerDay();
lima.render();
lima.renderList();

console.log(seattle, tokyo, dubai, paris, lima);