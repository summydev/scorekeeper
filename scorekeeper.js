alert(" HELLO!!! " + " The maximum of two players are needed ");
let askpone = prompt("what is player one name");
let askptwo = prompt(" what is player two name");
let specialname = document.querySelector("#specialname");
let specialnametwo = document.querySelector("#specialnametwo");

specialname.textContent = askpone
specialnametwo.textContent = askptwo

let p1button = document.querySelector("#playeronebutton");
let p2button = document.getElementById("playertwobutton");
let resetbutton = document.querySelector("#reset");
let p1zero = document.querySelector("#p1zero");
let p2zero = document.getElementById("p2zero");
let input = document.querySelector("input")
let p = document.querySelector("#pvalue")
let p1score = 0;
let p2score = 0;
let gameover = false;
let winningscore = 5;

p1button.addEventListener("click", function () {
    if (!gameover) {
        p1score++;
        if (p1score === winningscore) {
            p1zero.classList.add("winner")
            gameover = true;
            alert(askpone + " is the winner")
        }
        p1zero.textContent = p1score;
    }

});

p2button.addEventListener("click", function () {
    if (!gameover) {
        p2score++;
        if (p2score === winningscore) {
            gameover = true;
            p2zero.classList.add("winner")
            alert(askptwo + " is the winner")
        }
        p2zero.textContent = p2score;
    }
})

resetbutton.addEventListener("click", function(){
    p1zero.textContent=0;
    p2zero.textContent= 0;
    p1zero.classList.remove("winner");
    p2zero.classList.remove("winner");
    gameover = false;
})
input.addEventListener("change", function(){ 
p.textContent= input.value
winningscore=Number(input.value);

});