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
  avgCookies: 6.3, // multiply by random customers and put into array for  cookies/hour
  hoursOfOperation: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  customersPerHour: [],
  cookiesPerHour: [],
  dailyTotal: 0,
  // sum: cookiesPerHour[i].reduce(function(a,b){
  //   return a + b;
  // }, 0),
  randomCustomersPerHour: function(){
    for (var i = 0; i < this.hoursOfOperation.length; i++) {
      var randomCustomers = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
      this.customersPerHour.push(randomCustomers);
    }
    console.log('Seattle: Customers per hour',this.customersPerHour);
  },
  findCookiesPerHour: function(){ 
    for (var i = 0; i < this.hoursOfOperation.length; i++){
      var perHour = Math.round(this.avgCookies * this.customersPerHour[i]);
      this.cookiesPerHour.push(perHour);
      this.dailyTotal = this.dailyTotal + perHour;
    }
    console.log('Seattle: Cookies per hour',this.cookiesPerHour);
  },
  sumCookiesPerDay: function(){
    var dailyTotal = 0;
    for (var i = 0; i < this.cookiesPerHour.length; i++) {
      dailyTotal += this.cookiesPerHour[i]
    }
    console.log('Seattle: Cookies per day',this.dailyTotal);
  },
  render: function(){
  var parent = document.getElementById('seattle-sales-data');
  var listItem = document.createElement('p');
  listItem.textContent = this.name;
  parent.appendChild(listItem);
  },
  render6am: function(){
  var parent = document.getElementById('seattle-sales-data');
  var listItem = document.createElement('li');
  listItem.textContent = (`${this.hoursOfOperation[0]}: ${this.cookiesPerHour[0]} cookies`);
  parent.appendChild(listItem);  
  },
  render7am: function(){
  var parent = document.getElementById('seattle-sales-data');
  var listItem = document.createElement('li');
  listItem.textContent = (`${this.hoursOfOperation[1]}: ${this.cookiesPerHour[1]} cookies`);
  parent.appendChild(listItem);  
  },
  render8am: function(){
  var parent = document.getElementById('seattle-sales-data');
  var listItem = document.createElement('li');
  listItem.textContent = (`${this.hoursOfOperation[2]}: ${this.cookiesPerHour[2]} cookies`);
  parent.appendChild(listItem);  
  },
  render9am: function(){
  var parent = document.getElementById('seattle-sales-data');
  var listItem = document.createElement('li');
  listItem.textContent = (`${this.hoursOfOperation[3]}: ${this.cookiesPerHour[3]} cookies`);
  parent.appendChild(listItem);  
  },
  render10am: function(){
  var parent = document.getElementById('seattle-sales-data');
  var listItem = document.createElement('li');
  listItem.textContent = (`${this.hoursOfOperation[4]}: ${this.cookiesPerHour[4]} cookies`);
  parent.appendChild(listItem);  
  },
  render11am: function(){
  var parent = document.getElementById('seattle-sales-data');
  var listItem = document.createElement('li');
  listItem.textContent = (`${this.hoursOfOperation[5]}: ${this.cookiesPerHour[5]} cookies`);
  parent.appendChild(listItem);  
  },
  render12pm: function(){
  var parent = document.getElementById('seattle-sales-data');
  var listItem = document.createElement('li');
  listItem.textContent = (`${this.hoursOfOperation[6]}: ${this.cookiesPerHour[6]} cookies`);
  parent.appendChild(listItem);  
  },
  render1pm: function(){
  var parent = document.getElementById('seattle-sales-data');
  var listItem = document.createElement('li');
  listItem.textContent = (`${this.hoursOfOperation[7]}: ${this.cookiesPerHour[7]} cookies`);
  parent.appendChild(listItem);  
  },
  render2pm: function(){
  var parent = document.getElementById('seattle-sales-data');
  var listItem = document.createElement('li');
  listItem.textContent = (`${this.hoursOfOperation[8]}: ${this.cookiesPerHour[8]} cookies`);
  parent.appendChild(listItem);  
  },
  render3pm: function(){
  var parent = document.getElementById('seattle-sales-data');
  var listItem = document.createElement('li');
  listItem.textContent = (`${this.hoursOfOperation[9]}: ${this.cookiesPerHour[9]} cookies`);
  parent.appendChild(listItem);  
  },
  render4pm: function(){
  var parent = document.getElementById('seattle-sales-data');
  var listItem = document.createElement('li');
  listItem.textContent = (`${this.hoursOfOperation[10]}: ${this.cookiesPerHour[10]} cookies`);
  parent.appendChild(listItem);  
  },
  render5pm: function(){
  var parent = document.getElementById('seattle-sales-data');
  var listItem = document.createElement('li');
  listItem.textContent = (`${this.hoursOfOperation[11]}: ${this.cookiesPerHour[11]} cookies`);
  parent.appendChild(listItem);  
  },
  render6pm: function(){
  var parent = document.getElementById('seattle-sales-data');
  var listItem = document.createElement('li');
  listItem.textContent = (`${this.hoursOfOperation[12]}: ${this.cookiesPerHour[12]} cookies`);
  parent.appendChild(listItem);  
  },
  render7pm: function(){
  var parent = document.getElementById('seattle-sales-data');
  var listItem = document.createElement('li');
  listItem.textContent = (`${this.hoursOfOperation[13]}: ${this.cookiesPerHour[13]} cookies`);
  parent.appendChild(listItem);  
  },
}

Seattle.randomCustomersPerHour();
Seattle.findCookiesPerHour();
Seattle.sumCookiesPerDay();
Seattle.render();
Seattle.render6am();
Seattle.render7am();
Seattle.render8am();
Seattle.render9am();
Seattle.render10am();
Seattle.render11am();
Seattle.render12pm();
Seattle.render1pm();
Seattle.render2pm();
Seattle.render3pm();
Seattle.render4pm();
Seattle.render5pm();
Seattle.render6pm();
Seattle.render7pm();

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
  hoursOfOperation: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  customersPerHour: [],
  cookiesPerHour: [],
  dailyTotal: 0,
  randomCustomersPerHour: function(){
    for (var i = 0; i < this.hoursOfOperation.length; i++) {
      var randomCustomers = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
      this.customersPerHour.push(randomCustomers);
    }
    console.log('Tokyo: Customers per hour',this.customersPerHour);
  },
  findCookiesPerHour: function(){ 
    for (var i = 0; i < this.hoursOfOperation.length; i++){
      var perHour = Math.round(this.avgCookies * this.customersPerHour[i]);
      this.cookiesPerHour.push(perHour);
      this.dailyTotal = this.dailyTotal + perHour;
    }
    console.log('Tokyo: Cookies per hour',this.cookiesPerHour);
  },
  sumCookiesPerDay: function(){
    var dailyTotal = 0;
    for (var i = 0; i < this.cookiesPerHour.length; i++) {
      dailyTotal += this.cookiesPerHour[i]
    }
    console.log('Tokyo: Cookies per day',this.dailyTotal);
  },
  // render: function(){
  // var parent = document.getElementById('tokyo-sales-data');
  // var listItem = document.createElement('p');
  // listItem.textContent = this.name;
  // parent.appendChild(listItem);
  // },
  // render6am: function(){
  // var parent = document.getElementById('tokyo-sales-data');
  // var listItem = document.createElement('li');
  // listItem.textContent = (`${this.hoursOfOperation[0]}: ${this.cookiesPerHour[0]} cookies`);
  // parent.appendChild(listItem);  
  // },
  // render7am: function(){
  // var parent = document.getElementById('tokyo-sales-data');
  // var listItem = document.createElement('li');
  // listItem.textContent = (`${this.hoursOfOperation[1]}: ${this.cookiesPerHour[1]} cookies`);
  // parent.appendChild(listItem);  
  // },
  // render8am: function(){
  // var parent = document.getElementById('tokyo-sales-data');
  // var listItem = document.createElement('li');
  // listItem.textContent = (`${this.hoursOfOperation[2]}: ${this.cookiesPerHour[2]} cookies`);
  // parent.appendChild(listItem);  
  // },
  // render9am: function(){
  // var parent = document.getElementById('tokyo-sales-data');
  // var listItem = document.createElement('li');
  // listItem.textContent = (`${this.hoursOfOperation[3]}: ${this.cookiesPerHour[3]} cookies`);
  // parent.appendChild(listItem);  
  // },
  // render10am: function(){
  // var parent = document.getElementById('tokyo-sales-data');
  // var listItem = document.createElement('li');
  // listItem.textContent = (`${this.hoursOfOperation[4]}: ${this.cookiesPerHour[4]} cookies`);
  // parent.appendChild(listItem);  
  // },
  // render11am: function(){
  // var parent = document.getElementById('tokyo-sales-data');
  // var listItem = document.createElement('li');
  // listItem.textContent = (`${this.hoursOfOperation[5]}: ${this.cookiesPerHour[5]} cookies`);
  // parent.appendChild(listItem);  
  // },
  // render12pm: function(){
  // var parent = document.getElementById('tokyo-sales-data');
  // var listItem = document.createElement('li');
  // listItem.textContent = (`${this.hoursOfOperation[6]}: ${this.cookiesPerHour[6]} cookies`);
  // parent.appendChild(listItem);  
  // },
  // render1pm: function(){
  // var parent = document.getElementById('tokyo-sales-data');
  // var listItem = document.createElement('li');
  // listItem.textContent = (`${this.hoursOfOperation[7]}: ${this.cookiesPerHour[7]} cookies`);
  // parent.appendChild(listItem);  
  // },
  // render2pm: function(){
  // var parent = document.getElementById('tokyo-sales-data');
  // var listItem = document.createElement('li');
  // listItem.textContent = (`${this.hoursOfOperation[8]}: ${this.cookiesPerHour[8]} cookies`);
  // parent.appendChild(listItem);  
  // },
  // render3pm: function(){
  // var parent = document.getElementById('tokyo-sales-data');
  // var listItem = document.createElement('li');
  // listItem.textContent = (`${this.hoursOfOperation[9]}: ${this.cookiesPerHour[9]} cookies`);
  // parent.appendChild(listItem);  
  // },
  // render4pm: function(){
  // var parent = document.getElementById('tokyo-sales-data');
  // var listItem = document.createElement('li');
  // listItem.textContent = (`${this.hoursOfOperation[10]}: ${this.cookiesPerHour[10]} cookies`);
  // parent.appendChild(listItem);  
  // },
  // render5pm: function(){
  // var parent = document.getElementById('tokyo-sales-data');
  // var listItem = document.createElement('li');
  // listItem.textContent = (`${this.hoursOfOperation[11]}: ${this.cookiesPerHour[11]} cookies`);
  // parent.appendChild(listItem);  
  // },
  // render6pm: function(){
  // var parent = document.getElementById('tokyo-sales-data');
  // var listItem = document.createElement('li');
  // listItem.textContent = (`${this.hoursOfOperation[12]}: ${this.cookiesPerHour[12]} cookies`);
  // parent.appendChild(listItem);  
  // },
  // render7pm: function(){
  // var parent = document.getElementById('tokyo-sales-data');
  // var listItem = document.createElement('li');
  // listItem.textContent = (`${this.hoursOfOperation[13]}: ${this.cookiesPerHour[13]} cookies`);
  // parent.appendChild(listItem);  
  // },
}

Tokyo.randomCustomersPerHour();
Tokyo.findCookiesPerHour();
Tokyo.sumCookiesPerDay();
// Tokyo.render();
// Tokyo.render6am();
// Tokyo.render7am();
// Tokyo.render8am();
// Tokyo.render9am();
// Tokyo.render10am();
// Tokyo.render11am();
// Tokyo.render12pm();
// Tokyo.render1pm();
// Tokyo.render2pm();
// Tokyo.render3pm();
// Tokyo.render4pm();
// Tokyo.render5pm();
// Tokyo.render6pm();
// Tokyo.render7pm();


// DUBAI

var Dubai = {
  name: 'Dubai',
  minCustomers: 11,
  maxCustomers: 38,
  avgCookies: 3.7,
  hoursOfOperation: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
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
    for (var i = 0; i < this.hoursOfOperation.length; i++){
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
  },
}

Dubai.randomCustomersPerHour();
Dubai.findCookiesPerHour();
Dubai.sumCookiesPerDay();


// PARIS
    
var Paris = {
  name: 'Paris',
  minCustomers: 20,
  maxCustomers: 38,
  avgCookies: 2.3,
  hoursOfOperation: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
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
    for (var i = 0; i < this.hoursOfOperation.length; i++){
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
  },
}

Paris.randomCustomersPerHour();
Paris.findCookiesPerHour();
Paris.sumCookiesPerDay();
    

// LIMA

var Lima = {
  name: 'Lima',
  minCustomers: 2,
  maxCustomers: 16,
  avgCookies: 4.6,
  hoursOfOperation: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
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
    for (var i = 0; i < this.hoursOfOperation.length; i++){
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
  },
}

Lima.randomCustomersPerHour();
Lima.findCookiesPerHour();
Lima.sumCookiesPerDay();
    