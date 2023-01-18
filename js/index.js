// defining some constants
// game constants and variables
let direction = {x: 0, y: 0};
// initializing audio: so we do not want to change these later so we will use const 
const foodSound = new Audio('../sounds/food.mp3');
const gameOverSound =  new Audio('../sounds/gameover.mp3');
const backgroundSound = new  Audio('../sounds/backgroundmusic.mp3');
const moveSound = new  Audio('../sounds/move.mp3');
let speed = 2;
let lastPaintTIme = 0;
let snakeArr = [
    // this is the starting / head of the snake 
    {x : 13, y: 15} 
];
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
function main(ctime){
    window.requestAnimationFrame(main);
    // adjusting fps - frames per second 
    if((ctime - lastPaintTIme)/1000 < 1/speed){
        return;
    }
    lastPaintTIme = ctime;
    // making a method as gameEngine
    gameEngine();
}
function gameEngine(){
    // pt 1 updatig the sanke array and food

    // pt 2 display the snake and food
    //  removing the HTML of the board before printing the snake on to the board we want to clear the board
    board.innerHTML = "";
    // what we have to do is as the snkae ests we will insert the elements in the snakeArray
    snakeArr.forEach((e, index) =>{
        // creating a new element 
        snakeElement = document.createElement('div');
    })
}
window.requestAnimationFrame(main);


