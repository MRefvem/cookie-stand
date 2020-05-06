'use strict'

// goal: dynamically render a table to the DOM

// select the parent element
var parentElement = document.getElementById('table');

// put the 'Name' on the table
// create a tr
var tableRow = document.createElement('tr');


var array = ['Name', 'Type', 'Color', 'Age'];

for (var i = 0; i < array.length; i++){

// put the 'type' on the table
var tableHeader = document.createElement('th');
tableHeader.textContent = array[i];
tableRow.appendChild(tableHeader);

}

// append the tr to the parent element
parentElement.appendChild(tableRow);

// make the second row

var fluffy = ['fluffy', 'cat', 'white', 1];

var tableRow = document.createElement('tr');

for (var i = 0; i < fluffy.length; i++){
  // create the element
  var tableData = document.createElement('td');
  // give it content
  tableData.textContent = fluffy[i];
  // append it
  tableRow.appendChild(tableData);
}

parentElement.appendChild(tableRow);