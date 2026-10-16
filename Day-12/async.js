// callBack Hell 
function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("pitch sucess")
        }, 2000);
    })
}
console.log("getting data");

async function gettingallData() {
    console.log("Data 1st");
    await getData(1);
    console.log("Data 2nd");
    await getData(2);
}


gettingallData();


// getData(1)
// getData(1, () =>{
//     getData(2, () =>{
//         getData(3, () =>{
//             getData(4)
//         })
//     });
// })

// Promises

// let getpromises = () => {
//     return new Promise((resolve, reject) => {
//         // resolve("Sucess i am a promise.")
//         reject("Network Error--Rejected")
//     })
// }
// let promise = getpromises();

// promise.then((res) => {
//     console.log("the data fitched ", res);

// })
// promise.catch((err) => {
//     console.log("Not Fitched", err);
// })