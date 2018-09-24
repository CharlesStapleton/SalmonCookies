('use strict');

var hoursArray = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var timesList = '';
var timesList2 = '';
var timesList3 = '';
var timesList4 = '';
var timesList5 = '';

var firstAndPike = {
  cookiesPurchased: [],
  minCustomers: 23,
  maxCustomers: 65,
  avgCookie: 6.3,
  random: function() {
    for (var i = 0; i < hoursArray.length; i++) {
      var randomNum = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
      var cookiesCombo = Math.round(randomNum * this.avgCookie);
      this.cookiesPurchased.push(cookiesCombo);
      return cookiesCombo;
    }
  },

  render: function() {
    for (var i = 0; i < hoursArray.length; i++) {
      timesList += '<li>' + hoursArray[i] + ': ' + firstAndPike.random() + ' cookies' + '</li>';
      document.getElementById('firstAndPike').innerHTML = timesList;
    }
  },
};

var seaTacAirport = {
  cookiesPurchased: [],
  minCustomers: 3,
  maxCustomers: 24,
  avgCookie: 1.2,
  random: function() {
    for (var i = 0; i < hoursArray.length; i++) {
      var randomNum = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
      var cookiesCombo = Math.round(randomNum * this.avgCookie);
      this.cookiesPurchased.push(cookiesCombo);
      return cookiesCombo;
    }
  },

  render: function() {
    for (var i = 0; i < hoursArray.length; i++) {
      timesList2 += '<li>' + hoursArray[i] + ': ' + seaTacAirport.random() + ' cookies' + '</li>';
      document.getElementById('seaTacAirport').innerHTML = timesList2;
    }
  },
};

var seattleCenter = {
  cookiesPurchased: [],
  minCustomers: 11,
  maxCustomers: 38,
  avgCookie: 3.7,
  random: function() {
    for (var i = 0; i < hoursArray.length; i++) {
      var randomNum = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
      var cookiesCombo = Math.round(randomNum * this.avgCookie);
      this.cookiesPurchased.push(cookiesCombo);
      return cookiesCombo;
    }
  },

  render: function() {
    for (var i = 0; i < hoursArray.length; i++) {
      timesList3 += '<li>' + hoursArray[i] + ': ' + seattleCenter.random() + ' cookies' + '</li>';
      document.getElementById('seattleCenter').innerHTML = timesList3;
    }
  },
};

var capitolHill = {
  cookiesPurchased: [],
  minCustomers: 20,
  maxCustomers: 38,
  avgCookie: 2.3,
  random: function() {
    for (var i = 0; i < hoursArray.length; i++) {
      var randomNum = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
      var cookiesCombo = Math.round(randomNum * this.avgCookie);
      this.cookiesPurchased.push(cookiesCombo);
      return cookiesCombo;
    }
  },

  render: function() {
    for (var i = 0; i < hoursArray.length; i++) {
      timesList4 += '<li>' + hoursArray[i] + ': ' + capitolHill.random() + ' cookies' + '</li>';
      document.getElementById('capitolHill').innerHTML = timesList4;
    }
  },
};

var alki = {
  cookiesPurchased: [],
  minCustomers: 2,
  maxCustomers: 16,
  avgCookie: 4.6,
  random: function() {
    for (var i = 0; i < hoursArray.length; i++) {
      var randomNum = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
      var cookiesCombo = Math.round(randomNum * this.avgCookie);
      this.cookiesPurchased.push(cookiesCombo);
      return cookiesCombo;
    }
  },

  render: function() {
    for (var i = 0; i < hoursArray.length; i++) {
      timesList5 += '<li>' + hoursArray[i] + ': ' + alki.random() + ' cookies' + '</li>';
      document.getElementById('alki').innerHTML = timesList5;
    }
  },
};

firstAndPike.render();
seaTacAirport.render();
seattleCenter.render();
capitolHill.render();
alki.render();
