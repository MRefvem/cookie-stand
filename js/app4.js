'use strict'


// Global Variables

var hoursOfOperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Daily Total'];
var allStores = [];


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
}


// ROW TWO: Render Locations

Location.prototype.renderLocations = function(){
  var tableRow = document.createElement('tr');
  var cityName = document.createElement('th');
  cityName.textContent = this.name;
  tableRow.appendChild(cityName);
  for (var i = 0; i < this.cookiesPerHour.length; i++){
    var tableData = document.createElement('td');
    tableData.textContent = this.cookiesPerHour[i];
    tableRow.appendChild(tableData);
  }  
  parentElement.appendChild(tableRow);
}


// ROW THREE: Totals/Render Footer Row

function renderFooterRow(){
  var tableRow = document.createElement('tr');
  var tableData = document.createElement('th');
  tableData.textContent = 'Hourly Total';
  tableRow.appendChild(tableData);
  // outer loop: for each hour
  // inner loop is going to loop over each store
  // access my cookies
  
  for(var i = 0; i < hoursOfOperation.length; i++){
    var sum = 0;
    for(var j = 0; j < allStores.length; j++){
      console.log('inner loop', sum);
      sum += allStores[j].cookiesPerHour[i]
      
    }
    //create a table row
    tableData = document.createElement('td');
    tableData.textContent = (sum);
    tableRow.appendChild(tableData);
    // create a td
    // fill it with the sum
    // append
    parentElement.appendChild(tableRow); 
  } console.log('after the inner loop', sum);
}


Method 
Location.prototype.renderTable = function(){
  this.randomCustomersPerHour();
  this.findCookiesPerHour();
  this.sumCookiesPerDay();
  this.renderLocations();
};


// Console Log

console.log(seattle, tokyo, dubai, paris, lima);


// Invoking Functions/Methods

renderTableHead();
seattle.renderTable();
tokyo.renderTable();
dubai.renderTable();
paris.renderTable();
lima.renderTable();
renderFooterRow();
