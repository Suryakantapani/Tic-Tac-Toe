let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let restart = document.querySelector(".Restart");
let Winner = document.querySelector(".msg");

let x = true;
let c = 0;

const pattern = [
    [0, 1, 2], [0, 3, 6], [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8], [2, 4, 6],
    [3, 4, 5], [6, 7, 8],
];

const Reset = () => {
    x = true;
    c = 0;
    start(); 
    Winner.classList.add("hide");
    boxes.forEach((box) => {
        box.innerHTML = "";  
    });
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if (x) {
            box.innerHTML = "O";
            x = false;
        } else {
            box.innerHTML = "X";
            x = true;
        }
        c++;
        box.style.pointerEvents = "none";  

        let winner = checkWinner();
        if (winner) {
            showWinner(winner);
        } else if (c === 9) {
            gameDraw();
        }
    });
});

const stop = () => {
    boxes.forEach((box) => box.style.pointerEvents = "none");
};

const start = () => {
    boxes.forEach((box) => box.style.pointerEvents = "auto");
};

const gameDraw = () => {
    Winner.innerText = `Game was a Draw.`;
    Winner.classList.remove("hide");
    stop();
};

const showWinner = (winner) => {
    Winner.innerText = `Congratulations, Winner is ${winner}`;
    Winner.classList.remove("hide");
    stop();
};

const checkWinner = () => {
    for (let p of pattern) {
        let x = boxes[p[0]].innerText;
        let y = boxes[p[1]].innerText;
        let z = boxes[p[2]].innerText;
        if (x !== "" && y !== "" && z !== "") {
            if (x === y && y === z) {
                console.log("winner", x);
                return x;
            }
        }
    }
    return null;
};

// Event listener for reset button
reset.addEventListener("click", Reset);