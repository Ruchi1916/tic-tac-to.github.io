// let sound = new Music();
// let chance = new Music ();
// let end = new Music();
let turn  = "X";
let gameOver = false;

//Function for changing the chance

let changeChance = () => {
    return turn === "X" ? "O" : "X"
}

//Function to check the winner
const winner = () => {
    let boxText = document.getElementsByClassName('boxinfo');
let win = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]
win.forEach(e => {
    if((boxText[e[0]].innerText === boxText[e[1]].innerText) && (boxText[e[2]].innerText == boxText[e[1]].innerText) && (boxText[e[0]].innerText !== "")){
        document.querySelector('.info').innerText = boxText[e[0]].innerText + " WON";
        gameOver = true;
        document.querySelector('.imggif').getElementsByTagName('img')[0].style.width = "175px";
    }
})
}

// Main Game Logic
let box = document.getElementsByClassName("box");
Array.from(box).forEach(element => {
    let boxInfo = element.querySelector('.boxinfo')
    element.addEventListener('click', ()=>{
        if(boxInfo.innerText === ''){
            boxInfo.innerText = turn;
            turn = changeChance();
            winner();
            if (!gameOver){
            document.getElementsByClassName("info")[0].innerText = "Turn for" + turn;
            }
        }
    })
})

// Reset 

btn.addEventListener('click', ()=>{
    let boxInfo = document.querySelectorAll('.boxinfo');
    Array.from(boxInfo).forEach(element => {
        element.innerText = ""
    });
    turn = "X";
    gameOver = false
    document.getElementsByClassName("info")[0].innerText = "Turn for" + turn;
    document.querySelector('.imggif').getElementsByTagName('img')[0].style.width = "0px";

})