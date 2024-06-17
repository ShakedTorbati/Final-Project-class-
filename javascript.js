function game(){
    window.location.href="game.html";
}
function homepage(){
    window.location.href="index.html";
}
function API(){
    window.location.href="API.html";
}

var easy_order = [0, 0, 0, 0]; // red=1, blue=2, green=3, yellow=4

const numberToColor = {
    1: "red",
    2: "blue",
    3: "green",
    4: "yellow"
}

const colors = [];
const userSequence = [];

// get a number and return an array of length number, full of random numbers between 1-4
function randomNumbersArray(number) {
    const arr = [];
    for (let i = 0; i < number; i++) {
        arr[i] = Math.floor(Math.random() * 4) + 1;
    }
    return arr;
}

const random_4_array = randomNumbersArray(4);
console.log(random_4_array);

random_4_array.forEach((num) => {
    colors.push(numberToColor[num]);
    console.log(numberToColor[num]);
});

function clickedColor(event) {
    const color = event.target.id;
    console.log(color);
    userSequence.push(color);
    console.log("User Sequence: ", userSequence);
    if (userSequence.length === colors.length) {
        checkUserSequence();
    }
}

function checkUserSequence() {
    for (let i = 0; i < colors.length; i++) {
        if (userSequence[i] !== colors[i]) {
            alert("You are wrong!");
            return;
        }
    }
    alert("You are right!");
}
function gen_q(){
    var p=document.getElementById("quote");
    fetch('https://api.quotable.io/random')
    .then(response => response.json())
    .then(data => {
        p.innerHTML=`${data.content} —${data.author}`;
    })  
}