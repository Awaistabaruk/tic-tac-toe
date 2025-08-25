let boxes = document.querySelectorAll(".box");
let res = document.querySelector(".result");
let sect2 = document.querySelector(".section2");
let sect = document.querySelector(".section");
let newgame = document.querySelector(".newgame");
let reset = document.querySelector(".reset");
let winnerFound = false;

let hide = () => {
    sect2.classList.add("hide");

}
let hide2 = () => {
    sect.classList.add("hide");

}
hide();

let restart = () => {
    hide();
    sect.classList.remove("hide");
    boxes.forEach(box => {
        box.innerText = "";
        box.disabled = false;
    });
    res.innerText = "";
    player = true;
    winnerFound = false;
}


reset.addEventListener("click", restart);
newgame.addEventListener("click", restart);

let patterns = [[0, 1, 2],
[3, 4, 5],
[6, 7, 8],
[0, 3, 6],
[1, 4, 7],
[2, 5, 8],
[0, 4, 8],
[2, 4, 6]
];
let player = true;



let winner = () => {
    for (let pattern of patterns) {
        let [a, b, c] = pattern;
        let val1 = boxes[a].innerText;
        let val2 = boxes[b].innerText;
        let val3 = boxes[c].innerText;

        if (val1 !== "" && val1 === val2 && val1 === val3) {
            res.innerText = `   🎉 Congratulations!  ${val1} is the winner`;
            sect2.classList.remove("hide");
            sect.classList.add("hide");

            boxes.forEach(box => box.disabled = true);
            winnerFound = true;
            return;
        }
    }
}
let tied = () => {
    if (winnerFound == true) {
        return;
    }
    let count = 0;
    boxes.forEach(box => {
        if (box.innerText !== "") {
            count++;
        }
    });

    if (count === 9) {
        res.innerText = `Tied!`;
        sect2.classList.remove("hide");
        sect.classList.add("hide");
        boxes.forEach(box => box.disabled = true);
    }
};


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (player === true) {
            box.innerText = "X";
            console.log("X");
            player = false;
        }
        else {
            box.innerText = "O";
            player = true;
            console.log("O");

        }
        box.disabled = true;
        winner();
        tied();

    })


});
