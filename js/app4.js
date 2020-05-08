'use strict'


// Global Variables

var hoursOfOperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Daily Total'];
var allStores = [];
var form = document.getElementById('form');


// Constructor Function

function Location(name, minCustomers, maxCustomers, avgCookies){
  this.name = name;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers,
  this.avgCookies = avgCookies;
  this.hoursOfOperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Daily Total'];
  this.customersPerHour = [];
  this.cookiesPerHour = [];
  this.dailyTotal = 0;
  allStores.push(this);
};


// Object Instances: Store Locations

var seattle = new Location('Seattle', 23, 65, 6.3);
var tokyo = new Location('Tokyo', 3, 24, 1.2);
var dubai = new Location('Dubai', 11, 38, 3.7);
var paris = new Location('Paris', 20, 38, 2.3);
var lima = new Location('Lima', 2, 16, 4.6);


// Method #1: Random Customers Per Hour

Location.prototype.randomCustomersPerHour = function(){
  for (var i = 0; i < this.hoursOfOperation.length; i++){
    var randomCustomers = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
    this.customersPerHour[i] = randomCustomers;
  }
  // console.log(this.name, 'Customers per hour',this.customersPerHour);
};


// Method #2: Find Cookies Per Hour

Location.prototype.findCookiesPerHour = function(){
  for (var i = 0; i < this.customersPerHour.length; i++){
    var perHour = Math.round(this.avgCookies * this.customersPerHour[i]);
    this.cookiesPerHour[i] = perHour;
    this.dailyTotal = this.dailyTotal + perHour;
  }
  // console.log(this.name, 'Cookies per hour', this.cookiesPerHour);
};


// Method #3: Sum Cookies Per Day

Location.prototype.sumCookiesPerDay = function(){
  var dailyTotal = 0;
  for (var i = 0; i < this.cookiesPerHour.length; i++) {
    dailyTotal = this.cookiesPerHour[i] + dailyTotal;
  }
  // console.log(this.name, 'Cookies per day', this.dailyTotal);
  this.cookiesPerHour[this.cookiesPerHour.length-1] = dailyTotal;
};


// THE TABLE
// ROW ONE: Render Hours of Operation

var parentElement = document.getElementById('table');

function renderTableHead(){
  var tableRow = document.createElement('tr');
  var blankCell = document.createElement('th');
  blankCell.textContent = ('');
  tableRow.appendChild(blankCell);
  for (var i = 0; i < hoursOfOperation.length; i++){
    var tableHeader = document.createElement('th');
    tableHeader.textContent = hoursOfOperation[i];
    tableRow.appendChild(tableHeader);
  }
  parentElement.appendChild(tableRow);
};


// ROW TWO: Render Locations

Location.prototype.renderLocations = function(){
  var tableRow = document.createElement('tr');
  var cityName = document.createElement('th');
  cityName.textContent = this.name;
  tableRow.className = 'storeLocations';
  tableRow.appendChild(cityName);
  for (var i = 0; i < this.cookiesPerHour.length; i++){
    var tableData = document.createElement('td');
    tableData.textContent = this.cookiesPerHour[i];
    tableRow.appendChild(tableData);
  }  
  parentElement.appendChild(tableRow);
};


// ROW THREE: Totals/Render Footer Row

function renderFooterRow(){
  var tableRow = document.createElement('tr');
  var tableData = document.createElement('th');
  tableData.textContent = 'Hourly Total';
  tableRow.className = 'storeLocations';
  tableRow.appendChild(tableData);
  for(var i = 0; i < hoursOfOperation.length; i++){
    var sum = 0;
    for(var j = 0; j < allStores.length; j++){
      // console.log('inner loop', sum);
      sum += allStores[j].cookiesPerHour[i] 
    }
    tableData = document.createElement('td');
    tableData.textContent = (sum);
    tableRow.appendChild(tableData);
    parentElement.appendChild(tableRow); 
   } //console.log('after the inner loop', sum);
};


// create event handler function (complete)
// creates new object and pushes it to my array (complete)
// deletes table rows I need to delete
// then iterates over my array with a for loop and calls the render method on each object in that loop
// then call my footer function


// Handler Function

function newStoreForm(event){
  event.preventDefault();
  var newStore = (new Location(event.target.username.value, parseInt(event.target.minCustomers.value), parseInt(event.target.maxCustomers.value), parseInt(event.target.avgCookies.value)));
  // delete table rows
  var deleteRows = document.getElementsByClassName('storeLocations');
  var lengthOfArray = deleteRows.length;
  for ( var i = 0; i < lengthOfArray; i++){
    deleteRows[0].remove();
  }
  for (var i = 0; i < allStores.length; i++){
    allStores[i].renderAllPreviousMethods();
  }
  renderFooterRow();
};


// Method: Rendering Functions/Methods

Location.prototype.renderAllPreviousMethods = function(){
  this.randomCustomersPerHour();
  this.findCookiesPerHour();
  this.sumCookiesPerDay();
  this.renderLocations();
};


// Console Log

// console.log(seattle, tokyo, dubai, paris, lima);


// Invoking Functions/Methods

renderTableHead();
seattle.renderAllPreviousMethods();
tokyo.renderAllPreviousMethods();
dubai.renderAllPreviousMethods();
paris.renderAllPreviousMethods();
lima.renderAllPreviousMethods();
renderFooterRow();


// Listener

form.addEventListener('submit', newStoreForm);
