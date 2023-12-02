let date =  new Date()  //date is basically object you can use typeof to varify
console.log(date);  //2023-12-02T14:35:47.261Z
console.log(date.toString());  //Sat Dec 02 2023 20:05:47 GMT+0530 (India Standard Time)
console.log(date.toDateString());  //Sat Dec 02 2023
console.log(date.toISOString());  //2023-12-02T14:36:38.027Z
console.log(date.toJSON());   //2023-12-02T14:36:38.027Z
console.log(date.toLocaleDateString()) //2/12/2023
console.log(date.toLocaleString())  //2/12/2023, 8:09:28 pm
console.log(date.toLocaleString('default',
{
    weekday : "long",
}
)) //we can customize thiss 

let directdate = Date()

console.log(directdate) //Sat Dec 02 2023 20:09:52 GMT+0530 (India Standard Time)


// let createDate = new Date(2030 , 3, 4) //Thu Apr 04 2030
// let createDate = new Date(2030 , 3, 4, 5, 10)  //4/4/2030, 5:10:00 am
// let createDate = new Date("2030-03-24") // 24/3/2030, 5:30:00 am
let createDate = new Date("01-01-2024") // 24/3/2030, 5:30:00 am
console.log(createDate.toLocaleString())


let timestamp = Date.now()  //give time stamp

// console.log(timestamp.toLocaleString()); 17,01,52,88,98,941 this is miliseconds from the 1970