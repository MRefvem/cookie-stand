'use strict'

// Create object literals for each shop location outputting the following

// 1. Stores the min/max hourly customers, and the average cookies per customer, in object properties (complete)
// 2. Uses a method of that object to generate a random number of customers per hour (complete)
// 3. Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated (complete)
// 4. Store the results for each location in a separate array...perhaps as a property of the object representing that location (complete)
// 5. Display the values of each array as unordered lists in the browser
// 6. Calculating the sums of these hourly totals; your output for each location should look like this: (see example on assignment) (complete)

// 7. Display the lists on sales.html. We will be adding features to this application and working with its layout in the upcoming labs.

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

// generateRandomCustPerHour: function() {
  //   for(var i = 0; i < this.hoursOfOps.length; i++) {
    //     var randomCust = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour);
    //     this.custPerHour.push(randomCust);
    //   }
  
    
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