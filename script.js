function example1() {
  let counter = 5;
  counter = 7;
  console.log(counter);
  // counter = 7

  // // let name = "Akeel"
  // let decimal = 0.4

  // document.getElementById("dogCounter").innerText = counter

  let age1 = 25;
  let age2 = 22;
  let userArr = [22, 25, 24];
  let AverageAge = (userArr[0] + userArr[1] + userArr[2]) / userArr.length;

  console.log(AverageAge.toFixed());

  // // let the total age = 25 + 22

  // console.log(totalAge)

  let firstName = "Akeel";
  let lastName = "Lashley";

  // let fullName = (firstName + " " + lastName)
  // console.log(fullName)

  console.log(`${firstName} `);
  console.log("Hello User");
  console.log("Hello User");
  // Character Escape (\)
  console.log('That"s great');
  // // Expected Output: Hello, My name is [fullName]. I am [age] years old.

  let age = 50;
  console.log(age);

  age = age + 50;
  console.log(age);

  age += 50;
  console.log(age);

  age -= 30;
  console.log(age);

  age++;
  console.log(age);

  // console.log(age)
  // age = ++age  // age = 50 + 1

  // console.log(age)

  // age = --age
  // console.log(age)

  // // Create a variable, bonusPoints.Initialize it as 50. Increase it to 100.

  // // Decreate it down to 25, and then finally increate it to 70

  // // console.log it after each step
}

function displayWelcomeMessage() {
  console.log(
    "We are so thrilled to have you with us! We welcome you to our group! Looking forward to making things happen with you! Our warmest welcome to you! Together, we can create the synergy that will take us to a lot of success as we pursue our goals!"
  );
}

function totalLapTime() {
  let user1 = 20;
  let user2 = 15;

  let total = user1 + user2;

  console.log(`Total Lap time = ${total}`);
}

function averageLapTime() {
  let user1 = 20;
  let user2 = 15;
  let user3 = 12;
  let user4 = 17;

  // BEDMAS
  let average = (user1 + user2 + user3 + user4) / 4;

  console.log(`Average Lap Time = ${average}`);
}

averageLapTime();

// function displayWelcomeMessage() {
//     console.log("We are so thrilled to have you with us! We welcome you to our group! Looking forward to making things happen with you! Our warmest welcome to you! Together, we can create the synergy that will take us to a lot of success as we pursue our goals!")

// }

// function Hello() {
//     console.log("Hello")
// }

// displayWelcomeMessage()

// Create a function that displays your name and age remember to invoke (call) the function

// Global Scope Variables
// let lap1 = 34;
// let lap2 = 33;
// let lap3 = 36;

// function totalLapTimes() {
//     // Local Scope Variable
//     let lap4 = 46

//     console.log(totalTime)
// }

// totalLapTimes()

// // This Won't execute
// console.log(totalTime)

// STEP 1: Create a button in HTML
// STEP 2: Create a variable, dogs.Initialize it as 0
// STEP 3: Create a function addDog() to increment counter everytime the button is clicked
// STEP 4:update the dogCounter in the HTML to reflect the new count

const dogCounter = document.getElementById("dogCounter");
const userInput = document.getElementById("userInput");
const error = document.getElementById("error");

let dogs = 0;

function AddToDogConter() {
  error.textContent = "";

  if (userInput.value > 0) {
    let updatedUserInput = parseInt(userInput.value);
    dogs += updatedUserInput;
    dogCounter.textContent = `${dogs} Dog(s)`;
  } else {
    error.textContent = "Please enter a valid number";
  }
}

function donateDog() {
  error.textContent = "";
  if (dogs < 1) {
    error.textContent = "NO MORE DOGS STOP IT!!!!";
    return;
  }
  dogs -= 1;
  dogCounter.textContent = `${dogs} Dog(s)`;
}

function reset() {
  error.textContent = "";
  userInput.value = "";
  dogs = 0;
  dogCounter.textContent = `${dogs} Dog(s)`;
}
