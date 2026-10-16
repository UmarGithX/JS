let asyncFunction1 = () =>{
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            console.log("Data 1st is sucessfully fitches");
            resolve("Sucessfully Fitched")
        }, 2000);
        
    })
}

let asyncFunction2 = () =>{
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            console.log("Data 2nd is sucessfully fitches");
            resolve("Sucessfully Fitched data 2")
        }, 2000);
        
    })
}

console.log("Fetching Data......1");
let b1 = asyncFunction1()
b1.then((res) =>{
    console.log(res);
    console.log("Fetching Data .......2");
    let b2 = asyncFunction2()
    b2.then((res) =>{
        console.log(res);
        
    })

    
})