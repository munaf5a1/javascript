const animals = [
  { species: "Lion", name: "King" },
  { species: "Tiger", name: "Queen" },
];

function printAnimals(i) {
  this.print = function () {
    console.log("#" + i + " " + this.species + ": " + this.name);
  };
  this.print();
}

for (let index = 0; index < animals.length; index++) {
    printAnimals.call(animals[index],index)    
}

