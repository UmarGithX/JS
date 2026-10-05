let marks = [1, 2, 35, 675, 322, 566, 785, 2345, 654];
marks[5] = 643534; // the value of array can be changed as we did here
console.log(marks[5]);


// array looping
// for loop
{let marks = [1, 2, 35, 675, 322, 566, 785, 2345, 654];
    for (let element of marks) {
        console.log(element);
        
    }
}

{
    let array = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        console.log(element);

    }
}

// also for but oraniged
let array = ["Umar", "Hashir", "Hassan", "Fatima"]

{
    for (let index = 0; index < array.length; index++) {
        var element = array[index];
        // console.log(element);
        console.log(element.toUpperCase());
         
    
    }
}


// array printng with while loop
{
    let index = 0;
    while (index < array.length) {
        let output = array[index]
        console.log(output);
        index++;
    }
}
// array printing with Do while loop
{
    let index = 0;
    index < array.length;
    do {
        console.log(array[index]);
        index++;
    } while (array[index])
}


