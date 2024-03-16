// -- variables (var/let/const) & data types/structures (strings/numbers/booleans/arrays/objects) --
const description = 'We need a new floor.';
console.log(description);
const squareMeters = 100;
const specialCoating = true;
const floorOptions = ['carpet', 'hardwood', 'tiles'];
const renovationJob = {
    ownerName: 'John',
    maximumPrice: 5000,
    category: 'bathroom',
    newShower: true
};


// -- traditional functions vs arrow functions --

function calculatePrice1(sqMeters) {
    return 1000 + sqMeters;
}

var calculatePrice2 = function(sqMeters) {
    return 1000 + sqMeters;
};

const calculatePrice3 = (sqMeters) => {
    return 1000 + sqMeters;
};

const calculatePrice4 = sqMeters => 1000 + sqMeters;


// -- string concatenation vs template literals --
const price1 = 5000;
const result1 = 'The total cost will be: ' + price1;
const result2 = `The total cost will be: ${price1}`;


// -- if-else vs ternary operator --
const price2 = 5000;

if (price2) {
    console.log('hello');
} else {
    console.log('blabla');
}

price2 > 3000 ? console.log('expensive') : console.log('cheap');


// -- manipulating HTML and CSS --
const headingEl1 = document.querySelector('.heading');

headingEl1.textContent = 'Hello <span class="heading--big">everyone</span>!';
headingEl1.innerHTML = 'Hello <span class="heading--big">everyone</span>!';
headingEl1.insertAdjacentHTML('afterend', 'Hello <span class="heading--big">everyone</span>!');

headingEl1.style.fontSize = '55px';
headingEl1.classList.add('heading--big');


// -- events and functions for handling events (also called "event handlers") --
const headingEl2 = document.querySelector('.heading');

const clickHandler = () => {
    if (headingEl2.style.color === 'red') {
        headingEl2.style.color = 'green';
        console.log('changed color');
    } else {
        headingEl2.style.color = 'red';
        console.log('changed color');
    }
};

headingEl2.addEventListener('click', clickHandler);