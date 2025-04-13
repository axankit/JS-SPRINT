const tea = ["green tea", "black tea", "chai", "oolong tea"];

let selectedTeas = [];

for (let i = 0; i < tea.length; i++) {
  if (tea[i] != "chai") {
    selectedTeas.push(tea[i]);
  } else {
    i = tea.length;
  }
}

// console.log(selectedTeas)

const numbers = [1, 2, 3, 4, 5];

const storeNumbers = [];

for (let x of numbers) {
  if (x === 4) {
    break;
  }

  storeNumbers.push(x);
}

// console.log(storeNumbers)

const cities = ["London", "New York", "Paris", "Berlin"];

const visitedCities = [];

for (let i = 0; i < cities.length; i++) {
  if (cities[i] !== "Paris") {
    visitedCities.push(cities[i]);
  }
}

// console.log(visitedCities)

const teas = ["chai", "green tea", "herbal tea", "black tea"];

const preferredTeas = [];

for (let x of teas) {
  if (x != "herbal tea") {
    preferredTeas.push(x);
  }
}

// console.log(preferredTeas)

// for in loop

let cityNewPopulation = {};

let citiesPopulation = {
  London: 8900000,
  "New York": 8400000,
  Paris: 2200000,
  Berlin: 3500000,
};

for (const city in citiesPopulation) {
  if (city === "Berlin") {
    break;
  }

  cityNewPopulation[city] = citiesPopulation[city];
}

// console.log(cityNewPopulation)

// console.log(Object.keys(citiesPopulation))

// console.log(Object.values(citiesPopulation))

// You will get the your result in array.

// Agar apka key "" mai hai toh apko [] to access the keys.

let worldCities = {
  Sydney: 5000000,
  Tokyo: 9000000,
  Berlin: 3500000,
  Paris: 2200000,
};

let largeCities = [];

for (let city in worldCities) {
  if (worldCities[city] < 3000000) {
    break;
  }

  largeCities[city] = worldCities[city];
}

// console.log(largeCities)

// for each

let teaCollection = ["earl grey", "green tea", "chai", "oolong tea"];

let availableTeas = [];

teaCollection.forEach((tea) => {
  if (tea === "chai") {
    return;
  }

  availableTeas.push(tea);
});

// console.log(availableTeas)

let myWorldCities = ["Berlin", "Tokyo", "Sydney", "Paris"];

let traveledCities = [];

myWorldCities.forEach((city) => {
  if (city != "Sydney") {
    traveledCities.push(city);
  }
});

// console.log(traveledCities)

let values = [2, 5, 7, 9];

let doubledNumbers = [];

for (let i = 0; i < values.length; i++) {
  if (values[i] != 7) {
    const newValues = values[i] * 2;

    doubledNumbers.push(newValues);
  }
}

// console.log(doubledNumbers);

let chai=["chai", "green tea", "black tea","jasmine tea","herbal tea" ]

let shortTeas=[]

for (let x of chai){
  if (x.length>10){
    break;
  }

  shortTeas.push(x)
}

console.log(shortTeas)
