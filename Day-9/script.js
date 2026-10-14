let boxes = document.querySelectorAll(".box");
let Reset = document.querySelectorAll(".reset");
let win_msg = document.querySelector("#msg"); //the winning message the paragraph one.
let win_contnr = document.querySelector(".msg-container");
let newBtn = document.querySelector("#new_btn"); //This is for new button.

let turn_O = true;

let winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => { // here we targeting the buttons.
        console.log("Box was clicked"); //just conforming that buttons was selected or not 
        if (turn_O) { //checking which player Number 
            box.innerText = "O";
            turn_O = false; // this is for one time chick like that if it clicked once then its value become false so the X turn starts
        } else {

            box.innerText = "X";
            turn_O = true;
        }
        box.disabled = true;
        checkWinner();
    })
});

let show_winner = (winner) => {
    win_msg.innerText = `Congrats Winner is ${winner}`
    win_contnr.classList.remove("hide");

}


// checking winning logic
const checkWinner = () => {
    for (let pattern of winPatterns) {
        // console.log(pattern[0],pattern[1],pattern[2]);

        let pos1value = boxes[pattern[0]].innerText;
        let pos2value = boxes[pattern[1]].innerText;
        let pos3value = boxes[pattern[2]].innerText;


        if (pos1value != "" && pos2value != "" && pos3value != "") {
            if (pos1value === pos2value && pos2value === pos3value) {
                console.log("winner", pos1value);
                show_winner(pos1value);
                disable_after_win();

            }
        }

    }
};


// logic/Function for Reset Button
Reset.forEach((reset) => {
    reset.addEventListener("click", () => {
        boxes.forEach((box) => {
            box.disabled = false;
            box.innerText = "";
            win_contnr.classList.add("hide");

        });
        console.log("reseted"); // This logic was added by Maaz Ali

    })

});

disable_after_win = () => {
    boxes.forEach(box => {
        box.disabled = true;
    });
};


