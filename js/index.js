// defining some constants
// game constants and variables
let inpDir = { x: 0, y: 0 };
// initializing audio: so we do not want to change these later so we will use const
const foodSound = new Audio("../sounds/food.mp3");
const gameOverSound = new Audio("../sounds/gameover.mp3");
const backgroundSound = new Audio("../sounds/backgroundmusic.mp3");
const moveSound = new Audio("../sounds/move.mp3");
let speed = 2;
let score = 0;
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
function isCollide(sarr){
    return false;
}
function gameEngine() {
  // pt 1 updatig the sanke array and food
  if(isCollide(snakeArr)){
    gameOverSound.play();
    backgroundSound.pause();
    inputDir = {x: 0, y: 0};
    alert("Game Over! Press any Key to play again!");
    snakeArr = [{x: 13, y: 15}];
    backgroundSound.play();
    score = 0;
  }
  // it food is eaten then increment the score and regenerate the food
  if(snakeArr[0].y === food.y && snakeArr[0].x === food.x){
    //when food is eaten then we are adding a more part to the snake array 
    //also in the direction of motion ???
    snakeArr.unshift({x: snakeArr[0].x + inputDir.x, y: snakeArr[0].y + inputDir.y});
    //generate food at a arandom location  //formulae to generate random number bw a and b
    let a = 1;
    let b = 17;
    food = {x:z+Math.round(a+ (b-a) * Math.random())}
  }
  //moving the snake - will itereate over the body of the entire snake

  for(let i = snakeArr.length -2; i >= 0; i--){
        const element = array[i];
        //
        snakeArr[i+1] = {...snakeArr[i]};
  }

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
    if(index === 0){
        snakeElement.classList.add("head");
    }
    else{
        snakeElement.classList.add("snake")
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
// main logic
window.requestAnimationFrame(main);
// if any button is pressed on the keyboard than this funciton is fired
window.addEventListener('keydown', e =>{
    //inpDir is a varaible (velocity) or direction of the snake 
    inputDir = {x: 0, y:1} //start the game if any button is pressed on the keyboard
    moveSound.play(); //play the sound
    // trting to detect which key is pressed
    switch(e.key){
        case "ArrowUp":
            console.log("ArrowUp");
            inputDir.x = 0;
            inputDir.y = -1;
            break;

        case "ArrowDown":
            console.log("ArrowDown");
            inputDir.x = 0;
            inputDir.y = 1;
            break;
            
        case "ArrowLeft":
            console.log("ArrowLeft");
            inputDir.x = -1;
            inputDir.y = 0;
            break;
            
        case "ArrowRight":
            console.log("ArrowRight");
            inputDir.x = 1;
            inputDir.y = 0;
            break;

        default: 
            break;
    }
});
