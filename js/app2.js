'use strict'

// Lab: Salmon Cookies Pt. 2

// Instructions
// 1. Create a new branch for today's lab. Make sure it has all of your changes from lab 06 so that you can extend the functionality. (complete)
// 2. Replace all of your object literals for the salmon cookie stand with a single constructor function that, when called with the 'new' keyword, creates a new instance.
// 3. Replace the lists of your data for each store and build a single table of data instead. Display each store's data in a table format. Break each column by the hour and complete each row with a "Daily Location Total".

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
}

Location.prototype.randomCustomersPerHour = function(){
  for (var i = 0; i < this.hoursOfOperation.length; i++){
    var randomCustomers = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
    this.customersPerHour.push(randomCustomers);
  }
  console.log('Seattle: Customers per hour',this.customersPerHour);
};

Location.prototype.findCookiesPerHour = function(){
  for (var i = 0; i < this.hoursOfOperation.length-1; i++){
    var perHour = Math.round(this.avgCookies * this.customersPerHour[i]);
    this.cookiesPerHour.push(perHour);
    this.dailyTotal = this.dailyTotal + perHour;
  }
  console.log('Seattle: Cookies per hour',this.cookiesPerHour);
};

var seattle = new Location('Seattle', 23, 65, 6.3, ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'total'], [], [], 0);
var tokyo = new Location('Tokyo', 3, 24, 1.2, ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'total'], [], [], 0);
var dubai = new Location('Dubai', 11, 38, 3.7, ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'total'], [], [], 0);
var paris = new Location('Paris', 20, 38, 2.3, ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'total'], [], [], 0);
var lima = new Location('Lima', 2, 16, 4.6, ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'total'], [], [], 0);

seattle.randomCustomersPerHour();
tokyo.randomCustomersPerHour();

seattle.findCookiesPerHour();

console.log(seattle, tokyo, dubai, paris, lima);

var Seattle = {
  name: 'Seattle',
  minCustomers: 23,
  maxCustomers: 65,
  avgCookies: 6.3,
  hoursOfOperation: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'total'],
  customersPerHour: [],
  cookiesPerHour: [],
  dailyTotal: 0,
  randomCustomersPerHour: function(){
    for (var i = 0; i < this.hoursOfOperation.length; i++){
      var randomCustomers = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
      this.customersPerHour.push(randomCustomers);
    }
    console.log('Seattle: Customers per hour',this.customersPerHour);
  },
  findCookiesPerHour: function(){ 
    for (var i = 0; i < this.hoursOfOperation.length-1; i++){
      var perHour = Math.round(this.avgCookies * this.customersPerHour[i]);
      this.cookiesPerHour.push(perHour);
      this.dailyTotal = this.dailyTotal + perHour;
    }
    console.log('Seattle: Cookies per hour',this.cookiesPerHour);
  },
  sumCookiesPerDay: function(){
    var dailyTotal = 0;
    for (var i = 0; i < this.cookiesPerHour.length; i++) {
      dailyTotal = this.cookiesPerHour[i] + dailyTotal;
    }
    console.log('Seattle: Cookies per day',this.dailyTotal);
    this.cookiesPerHour.push(dailyTotal);
  },
  render: function(){
  var parent = document.getElementById('seattle-sales-data');
  var listItem = document.createElement('p');
  listItem.textContent = this.name;
  parent.appendChild(listItem);
  },
  renderList: function(){
  var parent = document.getElementById('seattle-sales-data');
  for (var i = 0; i < this.hoursOfOperation.length; i++){
    var listItem = document.createElement('li');
    listItem.textContent = (`${this.hoursOfOperation[i]}: ${this.cookiesPerHour[i]} cookies`);
    parent.appendChild(listItem);
  }
  }
}

Seattle.randomCustomersPerHour();
Seattle.findCookiesPerHour();
Seattle.sumCookiesPerDay();
Seattle.render();
Seattle.renderList();


// SEATTLE

var Seattle = {
  name: 'Seattle',
  minCustomers: 23,
  maxCustomers: 65,
  avgCookies: 6.3,
  hoursOfOperation: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'total'],
  customersPerHour: [],
  cookiesPerHour: [],
  dailyTotal: 0,
  randomCustomersPerHour: function(){
    for (var i = 0; i < this.hoursOfOperation.length; i++){
      var randomCustomers = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
      this.customersPerHour.push(randomCustomers);
    }
    console.log('Seattle: Customers per hour',this.customersPerHour);
  },
  findCookiesPerHour: function(){ 
    for (var i = 0; i < this.hoursOfOperation.length-1; i++){
      var perHour = Math.round(this.avgCookies * this.customersPerHour[i]);
      this.cookiesPerHour.push(perHour);
      this.dailyTotal = this.dailyTotal + perHour;
    }
    console.log('Seattle: Cookies per hour',this.cookiesPerHour);
  },
  sumCookiesPerDay: function(){
    var dailyTotal = 0;
    for (var i = 0; i < this.cookiesPerHour.length; i++) {
      dailyTotal = this.cookiesPerHour[i] + dailyTotal;
    }
    console.log('Seattle: Cookies per day',this.dailyTotal);
    this.cookiesPerHour.push(dailyTotal);
  },
  render: function(){
  var parent = document.getElementById('seattle-sales-data');
  var listItem = document.createElement('p');
  listItem.textContent = this.name;
  parent.appendChild(listItem);
  },
  renderList: function(){
  var parent = document.getElementById('seattle-sales-data');
  for (var i = 0; i < this.hoursOfOperation.length; i++){
    var listItem = document.createElement('li');
    listItem.textContent = (`${this.hoursOfOperation[i]}: ${this.cookiesPerHour[i]} cookies`);
    parent.appendChild(listItem);
  }
  }
}

Seattle.randomCustomersPerHour();
Seattle.findCookiesPerHour();
Seattle.sumCookiesPerDay();
Seattle.render();
Seattle.renderList();
 
    
// TOKYO

var Tokyo = {
  name: 'Tokyo',
  minCustomers: 3,
  maxCustomers: 24,
  avgCookies: 1.2,
  hoursOfOperation: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'total'],
  customersPerHour: [],
  cookiesPerHour: [],
  dailyTotal: 0,
  randomCustomersPerHour: function(){
    for (var i = 0; i < this.hoursOfOperation.length; i++){
      var randomCustomers = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
      this.customersPerHour.push(randomCustomers);
    }
    console.log('Tokyo: Customers per hour',this.customersPerHour);
  },
  findCookiesPerHour: function(){ 
    for (var i = 0; i < this.hoursOfOperation.length-1; i++){
      var perHour = Math.round(this.avgCookies * this.customersPerHour[i]);
      this.cookiesPerHour.push(perHour);
      this.dailyTotal = this.dailyTotal + perHour;
    }
    console.log('Tokyo: Cookies per hour',this.cookiesPerHour);
  },
  sumCookiesPerDay: function(){
    var dailyTotal = 0;
    for (var i = 0; i < this.cookiesPerHour.length; i++) {
      dailyTotal = this.cookiesPerHour[i] + dailyTotal;
    }
    console.log('Tokyo: Cookies per day',this.dailyTotal);
    this.cookiesPerHour.push(dailyTotal);
  },
  render: function(){
    var parent = document.getElementById('tokyo-sales-data');
    var listItem = document.createElement('p');
      listItem.textContent = this.name;
  parent.appendChild(listItem);
  },
  renderList: function(){
    var parent = document.getElementById('tokyo-sales-data');
    for (var i = 0; i < this.hoursOfOperation.length; i++){
      var listItem = document.createElement('li');
      listItem.textContent = (`${this.hoursOfOperation[i]}: ${this.cookiesPerHour[i]} cookies`);
      parent.appendChild(listItem);
    }
  }
}

Tokyo.randomCustomersPerHour();
Tokyo.findCookiesPerHour();
Tokyo.sumCookiesPerDay();
Tokyo.render();
Tokyo.renderList();


// DUBAI

var Dubai = {
  name: 'Dubai',
  minCustomers: 11,
  maxCustomers: 38,
  avgCookies: 3.7,
  hoursOfOperation: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'total'],
  customersPerHour: [],
  cookiesPerHour: [],
  dailyTotal: 0,
  randomCustomersPerHour: function(){
    for (var i = 0; i < this.hoursOfOperation.length; i++) {
      var randomCustomers = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
      this.customersPerHour.push(randomCustomers);
    }
    console.log('Dubai: Customers per hour',this.customersPerHour);
  },
  findCookiesPerHour: function(){ 
    for (var i = 0; i < this.hoursOfOperation.length-1; i++){
      var perHour = Math.round(this.avgCookies * this.customersPerHour[i]);
      this.cookiesPerHour.push(perHour);
      this.dailyTotal = this.dailyTotal + perHour;
    }
    console.log('Dubai: Cookies per hour',this.cookiesPerHour);
  },
  sumCookiesPerDay: function(){
    var dailyTotal = 0;
    for (var i = 0; i < this.cookiesPerHour.length; i++) {
      dailyTotal += this.cookiesPerHour[i]
    }
    console.log('Dubai: Cookies per day',this.dailyTotal);
    this.cookiesPerHour.push(dailyTotal);
  },
  render: function(){
    var parent = document.getElementById('dubai-sales-data');
    var listItem = document.createElement('p');
    listItem.textContent = this.name;
    parent.appendChild(listItem);
    },
    renderList: function(){
    var parent = document.getElementById('dubai-sales-data');
    for (var i = 0; i < this.hoursOfOperation.length; i++){
      var listItem = document.createElement('li');
      listItem.textContent = (`${this.hoursOfOperation[i]}: ${this.cookiesPerHour[i]} cookies`);
      parent.appendChild(listItem);
    }
  }
}

Dubai.randomCustomersPerHour();
Dubai.findCookiesPerHour();
Dubai.sumCookiesPerDay();
Dubai.render();
Dubai.renderList();


// PARIS
    
var Paris = {
  name: 'Paris',
  minCustomers: 20,
  maxCustomers: 38,
  avgCookies: 2.3,
  hoursOfOperation: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'total'],
  customersPerHour: [],
  cookiesPerHour: [],
  dailyTotal: 0,
  randomCustomersPerHour: function(){
    for (var i = 0; i < this.hoursOfOperation.length; i++) {
      var randomCustomers = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
      this.customersPerHour.push(randomCustomers);
    }
    console.log('Paris: Customers per hour',this.customersPerHour);
  },
  findCookiesPerHour: function(){ 
    for (var i = 0; i < this.hoursOfOperation.length-1; i++){
      var perHour = Math.round(this.avgCookies * this.customersPerHour[i]);
      this.cookiesPerHour.push(perHour);
      this.dailyTotal = this.dailyTotal + perHour;
    }
    console.log('Paris: Cookies per hour',this.cookiesPerHour);
  },
  sumCookiesPerDay: function(){
    var dailyTotal = 0;
    for (var i = 0; i < this.cookiesPerHour.length; i++) {
      dailyTotal += this.cookiesPerHour[i]
    }
    console.log('Paris: Cookies per day',this.dailyTotal);
    this.cookiesPerHour.push(dailyTotal);
  },
  render: function(){
    var parent = document.getElementById('paris-sales-data');
    var listItem = document.createElement('p');
    listItem.textContent = this.name;
    parent.appendChild(listItem);
    },
    renderList: function(){
    var parent = document.getElementById('paris-sales-data');
    for (var i = 0; i < this.hoursOfOperation.length; i++){
      var listItem = document.createElement('li');
      listItem.textContent = (`${this.hoursOfOperation[i]}: ${this.cookiesPerHour[i]} cookies`);
      parent.appendChild(listItem);
    }
  }
}

Paris.randomCustomersPerHour();
Paris.findCookiesPerHour();
Paris.sumCookiesPerDay();
Paris.render();
Paris.renderList();
    

// LIMA

var Lima = {
  name: 'Lima',
  minCustomers: 2,
  maxCustomers: 16,
  avgCookies: 4.6,
  hoursOfOperation: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'total'],
  customersPerHour: [],
  cookiesPerHour: [],
  dailyTotal: 0,
  randomCustomersPerHour: function(){
    for (var i = 0; i < this.hoursOfOperation.length; i++) {
      var randomCustomers = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
      this.customersPerHour.push(randomCustomers);
    }
    console.log('Lima: Customers per hour',this.customersPerHour);
  },
  findCookiesPerHour: function(){ 
    for (var i = 0; i < this.hoursOfOperation.length-1; i++){
      var perHour = Math.round(this.avgCookies * this.customersPerHour[i]);
      this.cookiesPerHour.push(perHour);
      this.dailyTotal = this.dailyTotal + perHour;
    }
    console.log('Lima: Cookies per hour',this.cookiesPerHour);
  },
  sumCookiesPerDay: function(){
    var dailyTotal = 0;
    for (var i = 0; i < this.cookiesPerHour.length; i++) {
      dailyTotal += this.cookiesPerHour[i]
    }
    console.log('Lima: Cookies per day',this.dailyTotal);
    this.cookiesPerHour.push(dailyTotal);
  },
  render: function(){
    var parent = document.getElementById('seattle-sales-data');
    var listItem = document.createElement('p');
    listItem.textContent = this.name;
    parent.appendChild(listItem);
    },
    renderList: function(){
    var parent = document.getElementById('seattle-sales-data');
    for (var i = 0; i < this.hoursOfOperation.length; i++){
      var listItem = document.createElement('li');
      listItem.textContent = (`${this.hoursOfOperation[i]}: ${this.cookiesPerHour[i]} cookies`);
      parent.appendChild(listItem);
    }
  }
}

Lima.randomCustomersPerHour();
Lima.findCookiesPerHour();
Lima.sumCookiesPerDay();
Lima.render();
Lima.renderList();