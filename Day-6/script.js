// Adding and showing new element with JS only!
let btn = document.createElement("button") // this is used for creating a element
btn.innerHTML = "Click Me !" // this is how we wirte text inside the button!
console.log(btn); // printing the button>\.\

// now we have to show it on the screen/

let show = document.querySelector("div") // here the div means the go inside the DIV and add the button in the last
show.append(btn) // now we append(adding in the last) the button 

// 2nd practice to add  element and show it 
let heading = document.createElement("h2") // this is what you want to create
heading.innerText = "This is Js made Heading 2"
console.log(heading);

let add = document.querySelector("body") // This is where you add what are you making
add.prepend(heading)

// shorter version of creating and adding element

let spa = document.createElement("span")
spa.innerHTML = "This is the easy why to add element into HTML with JS"

document.querySelector("body").append(spa) // this line do both works 
// 1)target where to add
// 2)show it on web


// ========================================================================//
 
