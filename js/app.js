('use strict');

var hoursArray = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var hourlyCustomersFirstAndPike = {
  cookiesPurchased: [],
  minCustomers: 23,
  maxCustomers: 65,
  avgCookie: 6.3,
  random: function() {
    for (var i = 0; i < hoursArray.length; i++) {
      var randomNum = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
      var cookiesCombo = randomNum * this.avgCookie;
      this.cookiesPurchased.push(cookiesCombo);
      // return randomNum * this.avgCookie;
    }
  },
  // for (var i = 0, i =< 15, i++) {
  //   push
  // }
  render: function() {
    for (var i = 0; i < hoursArray.length; i++) {
      var firstAndPike = document.getElementById('firstAndPike');
      var element = document.createElement(list);
      // firstAndPike.textContent = 
      // this.random();
    }
  },
};


// hourlyCustomers.textContent = hourlyCustomersFirstAndPike.random();
console.log(hourlyCustomersFirstAndPike.random());

// var hourlyCustomers = hourlyCustomersFirstAndPike.hourlyCustomers;

// console.log(hourlyCustomersFirstAndPike.random);
