('use strict');

var hoursArray = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Total'];
var allStores = [];

var CookieStore = function (name, minCustomers, maxCustomers, avgCookiePerCustomer, hoursOfOperation) {
  this.name = name;
  this.min = minCustomers;
  this.max = maxCustomers;
  this.avgCookiesPerSale = avgCookiePerCustomer;
  this.cookiesPurchased = [];
  this.totalSales = 0;
  this.hoursOpen = hoursOfOperation;
};

CookieStore.prototype.calcCookiesPerHour = function() {
  var customersPerHour = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  return Math.round(customersPerHour * this.avgCookiesPerSale);
};

CookieStore.prototype.calcCookies = function () {
  for (var i = 0; i < this.hoursOpen; i++) {
    var results = this.calcCookiesPerHour();
    console.log(results);
    this.cookiesPurchased.push(results);
    console.log(this.cookiesPurchased);
    this.totalSales += results;
  }
};

var cookieTableElement = document.getElementById('table');

var renderTableHeader = function () {
  var tableRowElement = document.createElement('tr');
  var tableHeaderElement = document.createElement('tr');
  tableRowElement.appendChild(tableHeaderElement);

  for (var i = 0; i < hoursArray.length + 1; i++) {
    tableHeaderElement = document.createElement('th');
    tableHeaderElement.textContent = hoursArray[i];
    tableRowElement.appendChild(tableHeaderElement);
  }

  cookieTableElement.appendChild(tableRowElement);
};

CookieStore.prototype.renderTable = function() {
  this.calcCookies();

  var tableRowElement = document.createElement('tr');

  var tableHeaderElement = document.createElement('th');
  tableHeaderElement.textContent = this.name;
  tableRowElement.appendChild(tableHeaderElement);

  var tableDataElement = document.createElement('td');

  console.log(this.cookiesPurchased);

  for (var i in this.cookiesPurchased) {
    tableDataElement = document.createElement('td');
    tableDataElement.textContent = this.cookiesPurchased[i];
    tableRowElement.appendChild(tableDataElement);
  }

  tableDataElement = document.createElement('td');
  tableDataElement.textContent = this.totalSales;
  tableRowElement.appendChild(tableDataElement);

  cookieTableElement.appendChild(tableRowElement);
};

var firstAndPike = new CookieStore('1st and Pike', 23, 65, 6.3, this.hoursArray.length - 1);
var seaTacAirport = new CookieStore('SeaTac Airport', 3, 24, 1.2, this.hoursArray.length - 1);
var seattleCenter = new CookieStore('Seattle Center', 11, 38, 3.7, this.hoursArray.length - 1);
var capitolHill = new CookieStore('Capitol Hill', 20, 38, 2.3, this.hoursArray.length - 1);
var alki = new CookieStore('Alki', 2, 16, 4.6, this.hoursArray.length - 1);

allStores.push(firstAndPike);
allStores.push(seaTacAirport);
allStores.push(seattleCenter);
allStores.push(capitolHill);
allStores.push(alki);

renderTableHeader();

firstAndPike.renderTable();
seaTacAirport.renderTable();
seattleCenter.renderTable();
capitolHill.renderTable();
alki.renderTable();
