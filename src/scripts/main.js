'use strict';

const elem = [...document.querySelectorAll('span.population')];
const totalElem = document.querySelector('span.total-population');
const averageElem = document.querySelector('span.average-population');
let total = 0;
let average = 0;

for (const e of elem) {
  const value = e.innerHTML.replaceAll(',', '');
  total += +value;
}

average = Math.round(total / elem.length);

totalElem.innerText = total.toLocaleString('en-US');
averageElem.innerHTML = average.toLocaleString('en-US');
