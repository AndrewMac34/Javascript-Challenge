// from data.js
var tableData = data;

console.log(data);
// YOUR CODE HERE!
var tbody = d3.select("tbody");
data.forEach(function(UFO) {
    console.log(UFO);
    var row = tbody.append("tr");
    Object.entries(UFO).forEach(function([key, value]) {
      console.log(key, value);
      // Append a cell to the row for each value
      // in the weather report object
      var cell = row.append("td");
      cell.text(value);
    });
});


var button = d3.select("#filter-btn");

var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

var inputField = d3.select("#datetime");

function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
  
    console.log(inputValue);
    console.log(tableData);
  
    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
  
    console.log(filteredData);

    //Remove any table items
    tbody.html("");
    //Append new filtered values to table
    filteredData.forEach(function(filtData){
        console.log(filtData);
        var row = tbody.append("tr");
        Object.entries(filtData).forEach(function([key, value]) {
            console.log(key, value);
            // Append a cell to the row for each value
            // in the weather report object
            var cell = row.append("td");
            cell.text(value);
        });
    })
};

// var button = d3.select("filter-btn");

// var form = d3.select("#form");

// // Create event handlers 
// button.on("click", runEnter);
// form.on("submit",runEnter);

// var inputField = d3.select("#datetime");