let btn = document.createElement("button") // this is used for creating a element
btn.innerHTML = "Click Me !" // this is how we wirte text inside the button!
console.log(btn); // printing the button>\.\

// now we have to show it on the screen/

let show = document.querySelector("div") // here the div means the go inside the DIV and add the button in the last
show.append(btn)


