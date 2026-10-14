// understanding call back 
function hello(){
    console.log("hello 1st");

    
}

function world(){
    console.log("world 2nd");
    hello()
}

// hello()
world()