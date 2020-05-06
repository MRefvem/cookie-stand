'use strict'

// // goal: dynamically render a table to the DOM

// // select the parent element
// var parentElement = document.getElementById('table');

// // put the 'Name' on the table
// // create a tr
// var tableRow = document.createElement('tr');


// var array = ['Name', 'Type', 'Color', 'Age'];

// for (var i = 0; i < array.length; i++){

// // put the 'type' on the table
// var tableHeader = document.createElement('th');
// tableHeader.textContent = array[i];
// tableRow.appendChild(tableHeader);

// }

// // append the tr to the parent element
// parentElement.appendChild(tableRow);

// // make the second row

// var fluffy = ['fluffy', 'cat', 'white', 1];

// var tableRow = document.createElement('tr');

// for (var i = 0; i < fluffy.length; i++){
//   // create the element
//   var tableData = document.createElement('td');
//   // give it content
//   tableData.textContent = fluffy[i];
//   // append it
//   tableRow.appendChild(tableData);
// }

// parentElement.appendChild(tableRow);


Location.prototype.render = function(){
  this.cookiesForTheDay();
  // only for the body of the table
  // get the parent Element
  var parentElement = document.getElementById('table');
  
  // this is for seattle
  // create a new element (tr)
  var tableRow = document.createElement('tr');
    // create  th
  var tableHeader = document.createElement('th');
    // put content this.name
  tableHeader.textContent = (this.name)
    // appendChild to Parent (th to tr)
  tableRow.appendChild(tableHeader);

  // this is for the cookies per hour
    // for loop over cookies sold per hour
  for (var i = 0; i < this.cookiesPerHour.length; i++){
    // create a td
    var tableData = document.createElement('td')
    // fill it with content - array this.cookiesSoldPerHour[i]
    tableData.textContent = this.cookiesPerHour[i];
    // append to the tr
    tableRow.appendChild(tableData);
  }

  // create td
  var tableData2 = document.createElement('td');
    // fill w contetn - this.
    tableData2.textContent = this.sumCookiesPerDay;
    // append to the row
    tableRow.appendChild(tableData2);
  // append the table row to the parent
  parentElement.appendChild(tableRow);
}


// FOOTER ROW


seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();

// nested for loop