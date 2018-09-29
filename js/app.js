('use strict');

var hoursArray = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var timesList = '';
var timesList2 = '';
var timesList3 = '';
var timesList4 = '';
var timesList5 = '';

var CookieStore = function (name, minCustomers, maxCustomers, avgCookiePerCustomer, hoursOfOperation) {
  this.name = name;
  this.min = minCustomers;
  this.max = maxCustomers;
  this.avgCookiesPerCustomer = avgCookiePerCustomer;
  this.cookiesPurchased = [];
  this.hoursOpen = hoursOfOperation;
};

CookieStore.prototype.calcCookiesPerHour = function() {
  var customersPerHour = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
  return Math.round(customersPerHour * this.avgCookiesPerCustomer);
};

CookieStore.prototype.calcCookies = function () {
  for (var i = 0; i < this.hoursOpen; i++) {
    this.cookiesPurchased.push(this.calcCookiesPerHour);
  }
};

CookieStore.prototype.renderHours = function () {
  if(!this.cookiesPurchased.length) { // To prevent the data from doubling
    this.calcCookiesPerHour();
  }
  var cookieStoreContainer = document.getElementById('store');
  var headerElement = document.createElement('h2');
  headerElement.textContent = this.name;
  cookieStoreContainer.appendChild(headerElement);

  var ulElement = document.createElement('ul');

  for (var i in this.cookiesPurchased) {
    var listElement = document.createElement('li');
    listElement.textContent = this.cookiesPurchased[i];
    ulElement.appendChild(listElement);
  }

  cookieStoreContainer.appendChild(ulElement);
};

CookieStore.prototype.renderTable = function() {
  this.calcCookiesPerHour();

  var cookieTableElement = document.getElementById('table');
  var tableRowElement = document.createElement('tableRow');
  tableRowElement.textContent = this.name;
  cookieTableElement.appendChild(tableRowElement);
};

var allStores = [];

var firstAndPike = new CookieStore('1st and Pike', 23, 65, 6.3, 15);

allStores.push(firstAndPike);

var renderAllStores = function () {
  firstAndPike.renderHours();
};

var renderAllTables = function () {
  for (var i in allStores) {
    allStores[i].renderTable();
  }
};

renderAllTables();

// var firstAndPike = {
//   cookiesPurchased: [],
//   minCustomers: 23,
//   maxCustomers: 65,
//   avgCookie: 6.3,
//   random: function() {
//     for (var i = 0; i < hoursArray.length; i++) {
//       var randomNum = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
//       var cookiesCombo = Math.round(randomNum * this.avgCookie);
//       this.cookiesPurchased.push(cookiesCombo);
//       return cookiesCombo;
//     }
//   },

//   render: function() {
//     for (var i = 0; i < hoursArray.length; i++) {
//       timesList += '<li>' + hoursArray[i] + ': ' + firstAndPike.random() + ' cookies' + '</li>';
//       document.getElementById('firstAndPike').innerHTML = timesList;
//     }
//   },

//   arrayTotal: function(total, num) {
//     return total + num;
//   },

//   getArrayTotal: function() {
//     var node = document.createElement('LI');
//     var textNode = document.createTextNode('Total: ' + this.cookiesPurchased.reduce(this.arrayTotal) + ' cookies');
//     node.appendChild(textNode);
//     document.getElementById('firstAndPike').appendChild(node);
//   }
// };

// var seaTacAirport = {
//   cookiesPurchased: [],
//   minCustomers: 3,
//   maxCustomers: 24,
//   avgCookie: 1.2,
//   random: function() {
//     for (var i = 0; i < hoursArray.length; i++) {
//       var randomNum = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
//       var cookiesCombo = Math.round(randomNum * this.avgCookie);
//       this.cookiesPurchased.push(cookiesCombo);
//       return cookiesCombo;
//     }
//   },

//   render: function() {
//     for (var i = 0; i < hoursArray.length; i++) {
//       timesList2 += '<li>' + hoursArray[i] + ': ' + seaTacAirport.random() + ' cookies' + '</li>';
//       document.getElementById('seaTacAirport').innerHTML = timesList2;
//     }
//   },

//   arrayTotal: function(total, num) {
//     return total + num;
//   },

//   getArrayTotal: function() {
//     var node = document.createElement('LI');
//     var textNode = document.createTextNode('Total: ' + this.cookiesPurchased.reduce(this.arrayTotal) + ' cookies');
//     node.appendChild(textNode);
//     document.getElementById('seaTacAirport').appendChild(node);
//   }
// };

// var seattleCenter = {
//   cookiesPurchased: [],
//   minCustomers: 11,
//   maxCustomers: 38,
//   avgCookie: 3.7,
//   random: function() {
//     for (var i = 0; i < hoursArray.length; i++) {
//       var randomNum = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
//       var cookiesCombo = Math.round(randomNum * this.avgCookie);
//       this.cookiesPurchased.push(cookiesCombo);
//       return cookiesCombo;
//     }
//   },

//   render: function() {
//     for (var i = 0; i < hoursArray.length; i++) {
//       timesList3 += '<li>' + hoursArray[i] + ': ' + seattleCenter.random() + ' cookies' + '</li>';
//       document.getElementById('seattleCenter').innerHTML = timesList3;
//     }
//   },

//   arrayTotal: function(total, num) {
//     return total + num;
//   },

//   getArrayTotal: function() {
//     var node = document.createElement('LI');
//     var textNode = document.createTextNode('Total: ' + this.cookiesPurchased.reduce(this.arrayTotal) + ' cookies');
//     node.appendChild(textNode);
//     document.getElementById('seattleCenter').appendChild(node);
//   }
// };

// var capitolHill = {
//   cookiesPurchased: [],
//   minCustomers: 20,
//   maxCustomers: 38,
//   avgCookie: 2.3,
//   random: function() {
//     for (var i = 0; i < hoursArray.length; i++) {
//       var randomNum = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
//       var cookiesCombo = Math.round(randomNum * this.avgCookie);
//       this.cookiesPurchased.push(cookiesCombo);
//       return cookiesCombo;
//     }
//   },

//   render: function() {
//     for (var i = 0; i < hoursArray.length; i++) {
//       timesList4 += '<li>' + hoursArray[i] + ': ' + capitolHill.random() + ' cookies' + '</li>';
//       document.getElementById('capitolHill').innerHTML = timesList4;
//     }
//   },

//   arrayTotal: function(total, num) {
//     return total + num;
//   },

//   getArrayTotal: function() {
//     var node = document.createElement('LI');
//     var textNode = document.createTextNode('Total: ' + this.cookiesPurchased.reduce(this.arrayTotal) + ' cookies');
//     node.appendChild(textNode);
//     document.getElementById('capitolHill').appendChild(node);
//   }
// };

// var alki = {
//   cookiesPurchased: [],
//   minCustomers: 2,
//   maxCustomers: 16,
//   avgCookie: 4.6,
//   random: function() {
//     for (var i = 0; i < hoursArray.length; i++) {
//       var randomNum = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
//       var cookiesCombo = Math.round(randomNum * this.avgCookie);
//       this.cookiesPurchased.push(cookiesCombo);
//       return cookiesCombo;
//     }
//   },

//   render: function() {
//     for (var i = 0; i < hoursArray.length; i++) {
//       timesList5 += '<li>' + hoursArray[i] + ': ' + alki.random() + ' cookies' + '</li>';
//       document.getElementById('alki').innerHTML = timesList5;
//     }
//   },

//   arrayTotal: function(total, num) {
//     return total + num;
//   },

//   getArrayTotal: function() {
//     var node = document.createElement('LI');
//     var textNode = document.createTextNode('Total: ' + this.cookiesPurchased.reduce(this.arrayTotal) + ' cookies');
//     node.appendChild(textNode);
//     document.getElementById('alki').appendChild(node);
//   }
// };

// firstAndPike.render();
// firstAndPike.getArrayTotal();

// seaTacAirport.render();
// seaTacAirport.getArrayTotal();

// seattleCenter.render();
// seattleCenter.getArrayTotal();

// capitolHill.render();
// capitolHill.getArrayTotal();

// alki.render();
// alki.getArrayTotal();
