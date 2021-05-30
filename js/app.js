/* eslint-disable new-cap */
'use strict';

let hour = ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:'];

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
const Seattle = {
  MinCust: 23,
  MaxCust: 65,
  AvgPerCust: 6.3,
  NumOfCookie: [],

  CalcNumOfCookie: function (){

    let h3El = document.createElement('h3');
    let divEl = document.getElementById('Sales');
    divEl.appendChild(h3El);
    h3El.textContent = 'Seattle';

    for (let i = 0; i < 14; i++) {
      this.NumOfCookie.push(Math.floor(this.AvgPerCust * getRandomInt(this.MinCust, this.MaxCust)));


      let ulEl = document.createElement('ul');
      divEl.appendChild(ulEl);


      let liEL = document.createElement('li');
      ulEl.appendChild(liEL);
      liEL.textContent = `${hour[i]} ${this.NumOfCookie[i]} cookies `;
    }

    return this.NumOfCookie;
  },

  TotalCookie: function(){
    let Total = 0;
    for (let m = 0; m < 14; m++) {
      Total = Total + this.NumOfCookie[m];
    }
    let divEl = document.getElementById('Sales');
    let ulEl = document.createElement('ul');
    divEl.appendChild(ulEl);


    let liEL = document.createElement('li');
    ulEl.appendChild(liEL);
    liEL.textContent = `Total: ${Total} cookies`;

    return Total;
  }

};
Seattle.CalcNumOfCookie();
Seattle.TotalCookie();



const Tokyo = {
  MinCust: 3,
  MaxCust: 24,
  AvgPerCust: 1.2,
  NumOfCookie: [],

  CalcNumOfCookie: function (){

    let h3El = document.createElement('h3');
    let divEl = document.getElementById('Sales');
    divEl.appendChild(h3El);
    h3El.textContent = 'Tokyo';

    for (let i = 0; i < 14; i++) {
      this.NumOfCookie.push(Math.floor(this.AvgPerCust * getRandomInt(this.MinCust, this.MaxCust)));


      let ulEl = document.createElement('ul');
      divEl.appendChild(ulEl);


      let liEL = document.createElement('li');
      ulEl.appendChild(liEL);
      liEL.textContent = `${hour[i]} ${this.NumOfCookie[i]} cookies `;
    }

    return this.NumOfCookie;
  },

  TotalCookie: function(){
    let Total = 0;
    for (let m = 0; m < 14; m++) {
      Total = Total + this.NumOfCookie[m];
    }
    let divEl = document.getElementById('Sales');
    let ulEl = document.createElement('ul');
    divEl.appendChild(ulEl);


    let liEL = document.createElement('li');
    ulEl.appendChild(liEL);
    liEL.textContent = `Total: ${Total} cookies`;

    return Total;
  }

};
Tokyo.CalcNumOfCookie();
Tokyo.TotalCookie();



const Dubai = {
  MinCust: 11,
  MaxCust: 38,
  AvgPerCust: 3.7,
  NumOfCookie: [],

  CalcNumOfCookie: function (){

    let h3El = document.createElement('h3');
    let divEl = document.getElementById('Sales');
    divEl.appendChild(h3El);
    h3El.textContent = 'Dubai';

    for (let i = 0; i < 14; i++) {
      this.NumOfCookie.push(Math.floor(this.AvgPerCust * getRandomInt(this.MinCust, this.MaxCust)));


      let ulEl = document.createElement('ul');
      divEl.appendChild(ulEl);


      let liEL = document.createElement('li');
      ulEl.appendChild(liEL);
      liEL.textContent = `${hour[i]} ${this.NumOfCookie[i]} cookies `;
    }

    return this.NumOfCookie;
  },

  TotalCookie: function(){
    let Total = 0;
    for (let m = 0; m < 14; m++) {
      Total = Total + this.NumOfCookie[m];
    }
    let divEl = document.getElementById('Sales');
    let ulEl = document.createElement('ul');
    divEl.appendChild(ulEl);


    let liEL = document.createElement('li');
    ulEl.appendChild(liEL);
    liEL.textContent = `Total: ${Total} cookies`;

    return Total;
  }

};
Dubai.CalcNumOfCookie();
Dubai.TotalCookie();



const Paris = {
  MinCust: 20,
  MaxCust: 38,
  AvgPerCust: 2.3,
  NumOfCookie: [],

  CalcNumOfCookie: function (){

    let h3El = document.createElement('h3');
    let divEl = document.getElementById('Sales');
    divEl.appendChild(h3El);
    h3El.textContent = 'Paris';

    for (let i = 0; i < 14; i++) {
      this.NumOfCookie.push(Math.floor(this.AvgPerCust * getRandomInt(this.MinCust, this.MaxCust)));


      let ulEl = document.createElement('ul');
      divEl.appendChild(ulEl);


      let liEL = document.createElement('li');
      ulEl.appendChild(liEL);
      liEL.textContent = `${hour[i]} ${this.NumOfCookie[i]} cookies `;
    }

    return this.NumOfCookie;
  },

  TotalCookie: function(){
    let Total = 0;
    for (let m = 0; m < 14; m++) {
      Total = Total + this.NumOfCookie[m];
    }
    let divEl = document.getElementById('Sales');
    let ulEl = document.createElement('ul');
    divEl.appendChild(ulEl);


    let liEL = document.createElement('li');
    ulEl.appendChild(liEL);
    liEL.textContent = `Total: ${Total} cookies`;

    return Total;
  }

};
Paris.CalcNumOfCookie();
Paris.TotalCookie();



const Lima = {
  MinCust: 2,
  MaxCust: 16,
  AvgPerCust: 4.6,
  NumOfCookie: [],

  CalcNumOfCookie: function (){

    let h3El = document.createElement('h3');
    let divEl = document.getElementById('Sales');
    divEl.appendChild(h3El);
    h3El.textContent = 'Lima';

    for (let i = 0; i < 14; i++) {
      this.NumOfCookie.push(Math.floor(this.AvgPerCust * getRandomInt(this.MinCust, this.MaxCust)));


      let ulEl = document.createElement('ul');
      divEl.appendChild(ulEl);


      let liEL = document.createElement('li');
      ulEl.appendChild(liEL);
      liEL.textContent = `${hour[i]} ${this.NumOfCookie[i]} cookies `;
    }

    return this.NumOfCookie;
  },

  TotalCookie: function(){
    let Total = 0;
    for (let m = 0; m < 14; m++) {
      Total = Total + this.NumOfCookie[m];
    }
    let divEl = document.getElementById('Sales');
    let ulEl = document.createElement('ul');
    divEl.appendChild(ulEl);


    let liEL = document.createElement('li');
    ulEl.appendChild(liEL);
    liEL.textContent = `Total: ${Total} cookies`;

    return Total;
  }

};
Lima.CalcNumOfCookie();
Lima.TotalCookie();



