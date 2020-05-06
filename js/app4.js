'use strict'


var hoursOfOperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'total'];


// Constructor Function

function Location(name, minCustomers, maxCustomers, avgCookies){
  this.name = name;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers,
  this.avgCookies = avgCookies;
  this.hoursOfOperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'total'];
  this.customersPerHour = [];
  this.cookiesPerHour = [];
  this.dailyTotal = 0;
};


// Function #1: Random Customers Per Hour

Location.prototype.randomCustomersPerHour = function(){
  for (var i = 0; i < this.hoursOfOperation.length; i++){
    var randomCustomers = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
    this.customersPerHour.push(randomCustomers);
  }
  console.log(this.name, 'Customers per hour',this.customersPerHour);
};


// Function #2: Find Cookies Per Hour

Location.prototype.findCookiesPerHour = function(){
  for (var i = 0; i < this.hoursOfOperation.length-1; i++){
    var perHour = Math.round(this.avgCookies * this.customersPerHour[i]);
    this.cookiesPerHour.push(perHour);
    this.dailyTotal = this.dailyTotal + perHour;
  }
  console.log(this.name, 'Cookies per hour', this.cookiesPerHour);
};


// Function #3: Sum Cookies Per Day

Location.prototype.sumCookiesPerDay = function(){
  var dailyTotal = 0;
  for (var i = 0; i < this.cookiesPerHour.length; i++) {
    dailyTotal = this.cookiesPerHour[i] + dailyTotal;
  }
  console.log(this.name, 'Cookies per day', this.dailyTotal);
  this.cookiesPerHour.push(dailyTotal);
};


// Function #5: Rendering List

Location.prototype.renderList = function(){
  this.randomCustomersPerHour();
  this.findCookiesPerHour();
  this.sumCookiesPerDay();
  var parent = document.getElementById('sales-data');
  var unorderedList = document.createElement('ul');
  var title = document.createElement('p');
  title.textContent = this.name;
  // unorderedList.appendChild(title);
  for (var i = 0; i < this.hoursOfOperation.length; i++){
    var listItem = document.createElement('li');
    listItem.textContent = (`${this.hoursOfOperation[i]}: ${this.cookiesPerHour[i]} cookies`);
    // unorderedList.appendChild(listItem);
    // Experimenting with trying to call all of my functions here in an effor to try to save some space further down.
    // this.render();
  }
  parent.appendChild(unorderedList);
};


// Store Locations

var seattle = new Location('Seattle', 23, 65, 6.3);
var tokyo = new Location('Tokyo', 3, 24, 1.2);
var dubai = new Location('Dubai', 11, 38, 3.7);
var paris = new Location('Paris', 20, 38, 2.3);
var lima = new Location('Lima', 2, 16, 4.6);


// Invoking Functions

seattle.renderList();
tokyo.renderList();
dubai.renderList();
paris.renderList();
lima.renderList();


// Console Log

console.log(seattle, tokyo, dubai, paris, lima);


// THE TABLE
// ROW ONE: Hours of Operation

var parentElement = document.getElementById('table');
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


// ROW TWO: Seattle

var tableRow = document.createElement('tr');
var citySeattle = document.createElement('th');
citySeattle.textContent = seattle.name;
tableRow.appendChild(citySeattle);
for (var i = 0; i < seattle.cookiesPerHour.length; i++){
  var tableData = document.createElement('td');
  tableData.textContent = seattle.cookiesPerHour[i];
  tableRow.appendChild(tableData);
}
parentElement.appendChild(tableRow);


// ROW THREE: Tokyo

var tableRow = document.createElement('tr');
var cityTokyo = document.createElement('th');
cityTokyo.textContent = tokyo.name;
tableRow.appendChild(cityTokyo);
for (var i = 0; i < tokyo.cookiesPerHour.length; i++){
  var tableData = document.createElement('td');
  tableData.textContent = tokyo.cookiesPerHour[i];
  tableRow.appendChild(tableData);
}
parentElement.appendChild(tableRow);


// ROW FOUR: Dubai

var tableRow = document.createElement('tr');
var cityDubai = document.createElement('th');
cityDubai.textContent = dubai.name;
tableRow.appendChild(cityDubai);
for (var i = 0; i < dubai.cookiesPerHour.length; i++){
  var tableData = document.createElement('td');
  tableData.textContent = dubai.cookiesPerHour[i];
  tableRow.appendChild(tableData);
}
parentElement.appendChild(tableRow);


// ROW FIVE: Paris

var tableRow = document.createElement('tr');
var cityParis = document.createElement('th');
cityParis.textContent = paris.name;
tableRow.appendChild(cityParis);
for (var i = 0; i < paris.cookiesPerHour.length; i++){
  var tableData = document.createElement('td');
  tableData.textContent = paris.cookiesPerHour[i];
  tableRow.appendChild(tableData);
}
parentElement.appendChild(tableRow);


// ROW SIX: Lima

var tableRow = document.createElement('tr');
var cityLima = document.createElement('th');
cityLima.textContent = lima.name;
tableRow.appendChild(cityLima);
for (var i = 0; i < lima.cookiesPerHour.length; i++){
  var tableData = document.createElement('td');
  tableData.textContent = lima.cookiesPerHour[i];
  tableRow.appendChild(tableData);
}
parentElement.appendChild(tableRow);