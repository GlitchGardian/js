// you can do number conversion using wrapper class

let score = "34";
let scoreInNum = Number(score);

console.log(typeof(scoreInNum));

console.log(typeof(NaN));  // type of NaN is number 

// if we do with same conversion 
// so

// "345" => 345
// 345asd => NaN // because the num + string the string is not convert into the number
// true => 1 
// false => 0

let num = 4534
let numToBool = Boolean(num) 
console.log(numToBool);


// do boolean conversion we have below result

// 1 => true 
// 0 => false
// "Abhi" => true 
// "" => false
// null => false

let number = 34
let numToString = String(number);
console.log(numToString);
console.log(typeof(numToString));
