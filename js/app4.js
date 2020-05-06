'use strict'


var hoursOfOperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Total'];


// Constructor Function

function Location(name, minCustomers, maxCustomers, avgCookies){
  this.name = name;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers,
  this.avgCookies = avgCookies;
  this.hoursOfOperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Total'];
  this.customersPerHour = [];
  this.cookiesPerHour = [];
  this.dailyTotal = 0;
};


// Method #1: Random Customers Per Hour

Location.prototype.randomCustomersPerHour = function(){
  for (var i = 0; i < this.hoursOfOperation.length; i++){
    var randomCustomers = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
    this.customersPerHour.push(randomCustomers);
  }
  console.log(this.name, 'Customers per hour',this.customersPerHour);
};


// Method #2: Find Cookies Per Hour

Location.prototype.findCookiesPerHour = function(){
  for (var i = 0; i < this.hoursOfOperation.length-1; i++){
    var perHour = Math.round(this.avgCookies * this.customersPerHour[i]);
    this.cookiesPerHour.push(perHour);
    this.dailyTotal = this.dailyTotal + perHour;
  }
  console.log(this.name, 'Cookies per hour', this.cookiesPerHour);
};


// Method #3: Sum Cookies Per Day

Location.prototype.sumCookiesPerDay = function(){
  var dailyTotal = 0;
  for (var i = 0; i < this.cookiesPerHour.length; i++) {
    dailyTotal = this.cookiesPerHour[i] + dailyTotal;
  }
  console.log(this.name, 'Cookies per day', this.dailyTotal);
  this.cookiesPerHour.push(dailyTotal);
};


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

Location.prototype.renderTable = function(){
  this.randomCustomersPerHour();
  this.findCookiesPerHour();
  this.sumCookiesPerDay();
};



// Method #5: Get Totals Per Hour Between All Locations

// Object Instances: Store Locations

var seattle = new Location('Seattle', 23, 65, 6.3);
var tokyo = new Location('Tokyo', 3, 24, 1.2);
var dubai = new Location('Dubai', 11, 38, 3.7);
var paris = new Location('Paris', 20, 38, 2.3);
var lima = new Location('Lima', 2, 16, 4.6);


// Invoking Functions

seattle.renderTable();
tokyo.renderTable();
dubai.renderTable();
paris.renderTable();
lima.renderTable();


// Console Log

console.log(seattle, tokyo, dubai, paris, lima);


// ROW TWO: Seattle
// Method: give an array, pass into the function this.cookiesPerHour.length[i], pass data through the method

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


// ROW SEVEN: Totals

var tableRow = document.createElement('tr');
var rowTotals = document.createElement('th');
rowTotals.textContent = ('Totals');
tableRow.appendChild(rowTotals);
for (var i = 0; i < hoursOfOperation.length; i++){
  var tableData = document.createElement('td');
  tableData.textContent = hoursOfOperation[i];
  tableRow.appendChild(tableData);
}  
parentElement.appendChild(tableRow);



// Practice For Loop

// var hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
var people = ['Spencer', 'Jonathan', 'Tyler', 'Trevor', 'Kamit'];

for (var i = 0; i < hoursOfOperation.length; i++){
  console.log(`The time is ${hoursOfOperation[i]}`);
  var hourlyTotal = 0;
  
  for (var j = 0; j < seattle.cookiesPerHour.length; j++){
    var sumCookiesPerHourAcrossLocations = cookiesPerHour
    console.log(`The total sales at ${hoursOfOperation[i]} at this location was ${seattle.cookiesPerHour[j]}`);
  }
}