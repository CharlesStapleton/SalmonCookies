('use strict');

var storeForm = document.getElementById('storeForm');
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
  this.renderTable();
};

var createStore = function (createNewStore) {
  createNewStore.preventDefault();
  createNewStore.stopPropagation();

  var newStoreName = createNewStore.target.name.value;
  var newStoreMin = parseInt(createNewStore.target.min.value);
  var newStoreMax = parseInt(createNewStore.target.max.value);
  var newStoreCookieAvg = parseInt(createNewStore.target.newStoreCookieAvg.value);
  var hoursOpen = hoursArray.length - 1;
  console.log(newStoreName, newStoreMin, newStoreMax, newStoreCookieAvg, hoursOpen);
  // new CookieStore(newStoreName, newStoreMin, newStoreMax, newStoreCookieAvg, hoursOpen);
  // allStores.push(new CookieStore(newStoreName, newStoreMin, newStoreMax, newStoreCookieAvg, hoursOpen));
  allStores.push(this);

  // document.getElementById('table').deleteTFoot();
  // document.getElementById('table').createTFoot('tableFooter');
  // renderTableFooter();
};

storeForm.addEventListener('submit', createStore);

CookieStore.prototype.calcCookiesPerHour = function() {
  var customersPerHour = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  return Math.round(customersPerHour * this.avgCookiesPerSale);
};

CookieStore.prototype.calcCookies = function () {
  for (var i = 0; i < this.hoursOpen; i++) {
    var results = this.calcCookiesPerHour();
    this.cookiesPurchased.push(results);
    this.totalSales += results;
  }
};

var cookieTableElement = document.getElementById('table');

var renderTableHeader = function () {
  var tableRowElement = document.createElement('tr');
  var tableHeaderElement = document.createElement('tr');
  tableRowElement.appendChild(tableHeaderElement);

  for (var i = 0; i < hoursArray.length; i++) {
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

var renderTableFooter = function() {  
  var totalTotal = 0;
  var cookiesTotalArray = [];

  var tableFooterElement = document.getElementById('tableFooter');

  var tableHeaderElement = document.createElement('th');
  tableHeaderElement.textContent = 'Totals';
  tableFooterElement.appendChild(tableHeaderElement);

  var tableDataElement = document.createElement('td');

  for (var i = 0; i < 14; i++) {
    var cookiesTotal = 0;

    for (var x = 0; x < allStores.length; x++) {
      cookiesTotal = allStores[x].cookiesPurchased[i] + cookiesTotal;
    }

    tableDataElement = document.createElement('td');
    tableDataElement.textContent = cookiesTotal;
    tableFooterElement.appendChild(tableDataElement);

    cookiesTotalArray.push(cookiesTotal);
  }

  for (var k = 0; k < 14; k++) {
    totalTotal += cookiesTotalArray[k];
    console.log(totalTotal);
  }

  tableDataElement = document.createElement('td');
  tableDataElement.textContent = totalTotal;
  tableFooterElement.appendChild(tableDataElement);
};

renderTableHeader();

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

// firstAndPike.renderTable();
// seaTacAirport.renderTable();
// seattleCenter.renderTable();
// capitolHill.renderTable();
// alki.renderTable();

renderTableFooter();
