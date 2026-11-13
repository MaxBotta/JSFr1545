// Variablen anlegen
// Es gibt verschiedne Datentypen
// Zeichen -> String
// Nummern -> Numbers, Ganzzahl -> Integer, Kommazahl -> float
// Listen -> Arrays
// Boolean -> True oder False

let myName = "Max"; // String
let myNumber = 101; // Number
let itsRaining = true; // Boolean / true oder false

// Listen
let names = ["Max", "Damian", "Lea"]; // Array aus Zeichen
let numbers = [3, 6, 1, 3.2, 6.3]; // Array aus Zahlen

// Konstanten
const PI = 3.14; // Konstanter Wert (unveränderbar)

// Nicht erlaubt da Konstante
// PI = 3.56;

// Javascript Object, Sehr praktisch um Information zu speichern
const person = {
  name: "Max Mustermann",
  age: 46,
  hobbies: ["coding", "football"],
};

const player = {
  experience: 1024,
  username: "Gandalf10",
  life: 40,
  attack: 10,
  defense: 5,
  friends: ["Max", "Damian", "Lea"],
  equipped: {
    weapon: 1903412,
  },
  inventory: [
    {
      id: 1903412,
      name: "Basic Sword",
      attack: 30,
    },
    {
      id: 23901392,
      name: "Basic Shield",
      defense: 20,
    },
  ],
  spawnPosition: {
    x: 1034,
    y: 312,
  },
  equip: function (objectName) {
    //...
  },
};

const playerName = player.username;

let monster = {
  life: 20,
  attack: 10,
  defense: 5,
};

// Beispiel für Quizgame
let questions = {
  html: [
    {
      id: 1,
      question: "Welchen Tag benutzt man für Fließtext",
      options: [
        { name: "<p>", isCorrect: true },
        { name: "<div>", isCorrect: false },
        { name: "<body>", isCorrect: false },
        { name: "<bodytext>", isCorrect: false },
      ],
    },
  ],
  css: [],
  js: [],
};

// If Anweisungen
if (monster.defense < player.attack) {
  monster.life += monster.defense - player.attack;
}

if (itsRaining) {
  player.equip("umbrella");
}

// Schleifen
// i ist Laufvariable startet bei 0, solange i kleiner als 10 und jede Runde i um eins erhöhen
for (let i = 0; i < 10; i++) {
  console.log(i);
}

let total = 0;
for (let i = 0; i < 10; i++) {
  total = total + i;
  console.log(total);
}

// Gehe durch alle Elemente in der numbers Liste (Etwas simplerre Schleife für Listen)
for (let number of numbers) {
  console.log(number);
}

console.log('-----------')
//Aufgabe: Gebe jede zweite Zahl von 0 bis 20 aus ( also 2, 4, 6 ...)
for (let i = 2; i < 21; i += 2) {
  console.log(i);
}

// Funktionen / Code den man an anderer Stelle speichert und später aufrufen kann
function addTwoNumbers(number1, number2) {
  return number1 + number2;
}

let result = addTwoNumbers(3, 7); // = 10
