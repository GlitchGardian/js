// String, string printing methods, declaration mathods,access string

let myname = "Abhishek"  //1st method to Declare string
let gameScore = 75

console.log(myname[0]);

//normal method to concat the variable with string
console.log("hello my name is " + myname + " my gmaescore is " + gameScore);  //difficult readbility

// String Interpolation in python it name as fstring
// example
console.log(`Hello my name is ${myname} and my score is ${gameScore}`) //easy readbility


// 2nd method to declare string

let mystring = new String("Abhishek")  //one time console it in browser so there is many things to understand

console.log(mystring);
console.log(mystring[0]); 

console.log(mystring.length);
console.log(mystring.toUpperCase());  


console.log(mystring.at(2))  //likely char at
console.log(mystring.charAt(2));
console.log(mystring.indexOf('A'));


console.log(mystring.substring(0,3)); //we cannot use minus value parameter


let sliceStr = mystring.slice(2,-3)  //we can use minus value in the slice as parameter
console.log(sliceStr)

let spaceStr = new String("         sapate-            ")

console.log(spaceStr.trim());


let thisname = "Abhi"

let replacedStr = thisname.replace('i','ishek')

console.log(replacedStr);


let Strnew = "Abhishek-bhatt-is-developer-in-microsoft"

console.log(Strnew.split("-"))
console.log(Strnew.split("-"))




