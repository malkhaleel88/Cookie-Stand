/* eslint-disable no-empty */
/* eslint-disable new-cap */
'use strict';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}


let hour = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];
let arrayOfBranch = [];
let divEl = document.getElementById('Sales');
let tableEl = document.createElement('table');
divEl.appendChild(tableEl);

function Branch(branchName, minCust, maxCust, avgPerCust){
  this.branchName = branchName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgPerCust = avgPerCust;
  this.numOfCookie = [];
  this.total = 0;
  this.arrayOfTotal = [];
  arrayOfBranch.push(this);

  this.calcNumOfCookie = function(){

    for (let i = 0; i < hour.length; i++) {
      this.numOfCookie.push(Math.ceil(this.avgPerCust * getRandomInt(this.minCust, this.maxCust)));

      this.total = this.total + this.numOfCookie[i];
    }
  };

  this.render = function(){

    let trEl = document.createElement('tr');
    tableEl.appendChild(trEl);

    let thb = document.createElement('th');
    trEl.appendChild(thb);
    thb.textContent = this.branchName;

    for (let z = 0; z < this.numOfCookie.length; z++) {
      let tdn = document.createElement('td');
      trEl.appendChild(tdn);
      tdn.textContent = this.numOfCookie[z];
    }
    let tht1 = document.createElement('th');
    trEl.appendChild(tht1);
    tht1.textContent = this.total;

  };
}


function tableHead(){

  let trEl = document.createElement('tr');
  tableEl.appendChild(trEl);

  let empty = document.createElement('th');
  trEl.appendChild(empty);

  for (let i = 0; i < hour.length; i++){
    let thn = document.createElement('th');
    trEl.appendChild(thn);
    thn.textContent = hour[i];
  }
  let tht2 = document.createElement('th');
  trEl.appendChild(tht2);
  tht2.textContent = 'Daily Location Total';

}
tableHead();



let seattle = new Branch('Seattle', 23, 65, 6.3);
let tokyo = new Branch('Tokyo', 3, 24, 1.2);
let dubai = new Branch('Dubai', 11, 38, 3.7);
let paris = new Branch('Paris', 20, 38, 2.3);
let lima = new Branch('Lima',2, 16, 4.6);


for (let b = 0; b < arrayOfBranch.length; b++) {
  arrayOfBranch[b].calcNumOfCookie();
  arrayOfBranch[b].render();
}


function tableFooter (){

  let trEl = document.createElement('tr');
  tableEl.appendChild(trEl);

  let thf1 = document.createElement('th');
  trEl.appendChild(thf1);
  thf1.textContent = 'Total';

  let tot = 0;

  for (let i = 0; i < hour.length; i++) {

    let totalHourly = 0;

    for (let m = 0; m < arrayOfBranch.length; m++) {

      totalHourly = totalHourly + arrayOfBranch[m].numOfCookie[i];

    }
    let thft2 = document.createElement('th');
    trEl.appendChild(thft2);
    thft2.textContent = totalHourly;
    tot = tot + totalHourly;
  }
  let thf3 = document.createElement('th');
  trEl.appendChild(thf3);
  thf3.textContent = tot;

}
tableFooter();


// const Seattle = {
//   MinCust: 23,
//   MaxCust: 65,
//   AvgPerCust: 6.3,
//   NumOfCookie: [],

//   CalcNumOfCookie: function (){

//     let h3El = document.createElement('h3');
//     let divEl = document.getElementById('Sales');
//     divEl.appendChild(h3El);
//     h3El.textContent = 'Seattle';

//     for (let i = 0; i < 14; i++) {
//       this.NumOfCookie.push(Math.floor(this.AvgPerCust * getRandomInt(this.MinCust, this.MaxCust)));


//       let ulEl = document.createElement('ul');
//       divEl.appendChild(ulEl);


//       let liEL = document.createElement('li');
//       ulEl.appendChild(liEL);
//       liEL.textContent = `${hour[i]} ${this.NumOfCookie[i]} cookies `;
//     }

//     return this.NumOfCookie;
//   },

//   TotalCookie: function(){
//     let Total = 0;
//     for (let m = 0; m < 14; m++) {
//       Total = Total + this.NumOfCookie[m];
//     }
//     let divEl = document.getElementById('Sales');
//     let ulEl = document.createElement('ul');
//     divEl.appendChild(ulEl);


//     let liEL = document.createElement('li');
//     ulEl.appendChild(liEL);
//     liEL.textContent = `Total: ${Total} cookies`;

//     return Total;
//   }

// };
// Seattle.CalcNumOfCookie();
// Seattle.TotalCookie();



// const Tokyo = {
//   MinCust: 3,
//   MaxCust: 24,
//   AvgPerCust: 1.2,
//   NumOfCookie: [],

//   CalcNumOfCookie: function (){

//     let h3El = document.createElement('h3');
//     let divEl = document.getElementById('Sales');
//     divEl.appendChild(h3El);
//     h3El.textContent = 'Tokyo';

//     for (let i = 0; i < 14; i++) {
//       this.NumOfCookie.push(Math.floor(this.AvgPerCust * getRandomInt(this.MinCust, this.MaxCust)));


//       let ulEl = document.createElement('ul');
//       divEl.appendChild(ulEl);


//       let liEL = document.createElement('li');
//       ulEl.appendChild(liEL);
//       liEL.textContent = `${hour[i]} ${this.NumOfCookie[i]} cookies `;
//     }

//     return this.NumOfCookie;
//   },

//   TotalCookie: function(){
//     let Total = 0;
//     for (let m = 0; m < 14; m++) {
//       Total = Total + this.NumOfCookie[m];
//     }
//     let divEl = document.getElementById('Sales');
//     let ulEl = document.createElement('ul');
//     divEl.appendChild(ulEl);


//     let liEL = document.createElement('li');
//     ulEl.appendChild(liEL);
//     liEL.textContent = `Total: ${Total} cookies`;

//     return Total;
//   }

// };
// Tokyo.CalcNumOfCookie();
// Tokyo.TotalCookie();



// const Dubai = {
//   MinCust: 11,
//   MaxCust: 38,
//   AvgPerCust: 3.7,
//   NumOfCookie: [],

//   CalcNumOfCookie: function (){

//     let h3El = document.createElement('h3');
//     let divEl = document.getElementById('Sales');
//     divEl.appendChild(h3El);
//     h3El.textContent = 'Dubai';

//     for (let i = 0; i < 14; i++) {
//       this.NumOfCookie.push(Math.floor(this.AvgPerCust * getRandomInt(this.MinCust, this.MaxCust)));


//       let ulEl = document.createElement('ul');
//       divEl.appendChild(ulEl);


//       let liEL = document.createElement('li');
//       ulEl.appendChild(liEL);
//       liEL.textContent = `${hour[i]} ${this.NumOfCookie[i]} cookies `;
//     }

//     return this.NumOfCookie;
//   },

//   TotalCookie: function(){
//     let Total = 0;
//     for (let m = 0; m < 14; m++) {
//       Total = Total + this.NumOfCookie[m];
//     }
//     let divEl = document.getElementById('Sales');
//     let ulEl = document.createElement('ul');
//     divEl.appendChild(ulEl);


//     let liEL = document.createElement('li');
//     ulEl.appendChild(liEL);
//     liEL.textContent = `Total: ${Total} cookies`;

//     return Total;
//   }

// };
// Dubai.CalcNumOfCookie();
// Dubai.TotalCookie();



// const Paris = {
//   MinCust: 20,
//   MaxCust: 38,
//   AvgPerCust: 2.3,
//   NumOfCookie: [],

//   CalcNumOfCookie: function (){

//     let h3El = document.createElement('h3');
//     let divEl = document.getElementById('Sales');
//     divEl.appendChild(h3El);
//     h3El.textContent = 'Paris';

//     for (let i = 0; i < 14; i++) {
//       this.NumOfCookie.push(Math.floor(this.AvgPerCust * getRandomInt(this.MinCust, this.MaxCust)));


//       let ulEl = document.createElement('ul');
//       divEl.appendChild(ulEl);


//       let liEL = document.createElement('li');
//       ulEl.appendChild(liEL);
//       liEL.textContent = `${hour[i]} ${this.NumOfCookie[i]} cookies `;
//     }

//     return this.NumOfCookie;
//   },

//   TotalCookie: function(){
//     let Total = 0;
//     for (let m = 0; m < 14; m++) {
//       Total = Total + this.NumOfCookie[m];
//     }
//     let divEl = document.getElementById('Sales');
//     let ulEl = document.createElement('ul');
//     divEl.appendChild(ulEl);


//     let liEL = document.createElement('li');
//     ulEl.appendChild(liEL);
//     liEL.textContent = `Total: ${Total} cookies`;

//     return Total;
//   }

// };
// Paris.CalcNumOfCookie();
// Paris.TotalCookie();



// const Lima = {
//   MinCust: 2,
//   MaxCust: 16,
//   AvgPerCust: 4.6,
//   NumOfCookie: [],

//   CalcNumOfCookie: function (){

//     let h3El = document.createElement('h3');
//     let divEl = document.getElementById('Sales');
//     divEl.appendChild(h3El);
//     h3El.textContent = 'Lima';

//     for (let i = 0; i < 14; i++) {
//       this.NumOfCookie.push(Math.floor(this.AvgPerCust * getRandomInt(this.MinCust, this.MaxCust)));


//       let ulEl = document.createElement('ul');
//       divEl.appendChild(ulEl);


//       let liEL = document.createElement('li');
//       ulEl.appendChild(liEL);
//       liEL.textContent = `${hour[i]} ${this.NumOfCookie[i]} cookies `;
//     }

//     return this.NumOfCookie;
//   },

//   TotalCookie: function(){
//     let Total = 0;
//     for (let m = 0; m < 14; m++) {
//       Total = Total + this.NumOfCookie[m];
//     }
//     let divEl = document.getElementById('Sales');
//     let ulEl = document.createElement('ul');
//     divEl.appendChild(ulEl);


//     let liEL = document.createElement('li');
//     ulEl.appendChild(liEL);
//     liEL.textContent = `Total: ${Total} cookies`;

//     return Total;
//   }

// };
// Lima.CalcNumOfCookie();
// Lima.TotalCookie();
