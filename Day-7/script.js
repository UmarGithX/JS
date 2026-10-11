let kill = document.querySelector("button");
kill.addEventListener("click", () => { //with this addeventlistner you can add two functions.
    console.log("button was Clicked L0");
})

kill.addEventListener("click", () => {
    console.log("button was Clicked L1");
})

let rem = ("click", () => {  //really dont understnad it HAHAHAHA!!
    console.log("button was Clicked L2");
})
kill.addEventListener("click", () => {
    console.log("button was Clicked L3");
})

kill.removeEventListener("click", rem)

let save = document.querySelector("div")
save.addEventListener("mouseover", () => {
    console.log("Mouse Houred");

})
// Changing theme From Dark to Light and Vice-Versa 
let mode = document.querySelector("#mode") // first target the element here
let mde = "Light"; // A Default Value of the Theme
mode.addEventListener("click", () => {
    if (mde === "Light") { //Logic For Changing theme
        mde = "Dark"
    } else {
        mde = "Light"
    }
    console.log(mde); 

})

