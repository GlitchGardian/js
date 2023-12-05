let num = 34567
console.log(num)
console.log(typeof num)

let mynum = new Number(345678.3456)
console.log(mynum)

console.log(typeof mynum)

console.log(mynum.toFixed(2)) //use to fix value 

console.log(mynum.toString())  // you can also convert like let numtoStr = String(mynum).
console.log(mynum.toString().length)  //after convert in string you can use any function of string

let number = new Number(675764656)
console.log(number.toLocaleString('en-IN'))



let numformath = 45.4564

console.log(Math.abs(-4.345))  //return plus value
console.log(Math.round(4.345)) //roundoff
console.log(Math.floor(4.345)) //floor value
console.log(Math.ceil(4.345)) //ceiling value
console.log(Math.pow(4, 4)) //power

random = Math.random()
console.log(random)



// now we need the random value between the max and min value

let min = 10 
let max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)  //now the values is generate between the 10 and 20