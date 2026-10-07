let price = [250,645,300,900,50];
for (let index = 0; index < price.length; index++) {
    const element = price[index];
    // console.log(`value at index ${index} is ${element}`); 
    let off = element /10 ;// logic of 10% offer 
    let offer = element - off
    console.log(`price on ${element} after 10% offer is Rs:${offer}`);
}



// for (const element of price) {
//     console.log(element);
// }