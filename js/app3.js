'use strict'

// goal: dynamically render a table to the DOM

// select the parent element
var parentElement = document.getElementById('table');

// put the 'Name' on the table
// create a tr
var tableRow = document.createElement('tr');

// create a th
var tableHeader = document.createElement('th');

// fill it with content
tableHeader.textContent = 'Name';

// append it to the parent
tableRow.appendChild(tableHeader);

// put the 'type' on the table
tableHeader = document.createElement('th');
tableHeader.textContent = 'Type';
tableRow.appendChild(tableHeader);