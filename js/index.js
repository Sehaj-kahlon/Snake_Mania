// defining some constants
// game constants and variables
let direction = { x: 0, y: 0 };
// initializing audio: so we do not want to change these later so we will use const
const foodSound = new Audio("../sounds/food.mp3");
const gameOverSound = new Audio("../sounds/gameover.mp3");
const backgroundSound = new Audio("../sounds/backgroundmusic.mp3");
const moveSound = new Audio("../sounds/move.mp3");
let speed = 2;
let lastPaintTIme = 0;
let snakeArr = [
  // this is the starting / head of the snake
  { x: 13, y: 15 },
];
// food is an object
food = { x: 10, y: 15 };
// writing funcitons
// game functions  - like  jab bhi app ek game khel rhe ho tb screen ko bar bar paint kiya jaat hia thig is generally done by game loop

// games require game loops
// using game loop
// can use setInterval feature of JS for this like it will perform the funciton repeatedly
// but when you are rendering animation -- it is highly recommended to use the bellow function 😜
// this function takes a function as an argument

// main function - it takes time stamp current time as an argument
// we called the requestAnimationFrame inside the main function this will call the main function again and again so now it is a game loop
// rewquestAnimationFrame is better than setInterval as it dows not flikers
function main(ctime) {
  window.requestAnimationFrame(main);
  // adjusting fps - frames per second
  if ((ctime - lastPaintTIme) / 1000 < 1 / speed) {
    return;
  }
  lastPaintTIme = ctime;
  // making a method as gameEngine
  gameEngine();
}
function gameEngine() {
  // pt 1 updatig the sanke array and food

  // pt 2 display the food
  //  display the snake and
  //  removing the HTML of the board before printing the snake on to the board we want to clear the board
  board.innerHTML = "";
  // what we have to do is as the snkae ests we will insert the elements in the snakeArray
  snakeArr.forEach((e, index) => {
    // creating a new element like in this we are making a div
    snakeElement = document.createElement("div");
    // adding some css in the element with js
    // to place at the particular row in the grid
    snakeElement.style.gridRowStart = e.y;
    // place at the particular column
    snakeElement.style.gridColumnStart = e.x;
    // appending the snakeELement as a child in the board
    // adding a class to the element snakeElement bcs we want to add css to the class
    snakeElement.classList.add("snake");
    if(index === 0){
        snakeElement.classList.add("head");
    }
    board.appendChild(snakeElement);
  });
  // Display the food
  foodElement = document.createElement("div");
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add("food");
  board.appendChild(foodElement);
}
window.requestAnimationFrame(main);
