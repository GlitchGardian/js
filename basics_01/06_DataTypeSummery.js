// There is Two type of DataTypes 
// 1. premitive
// 2. nonPremitive or Referance

// Primitive
// Number,String,Undefined( Memory alloceted but value is not assign ),null(empty), BigInt,Boolean,Symbol
 
const bigNum = 2345678934567890n

console.log(typeof bigNum);

const id = Symbol('123')
const Cid = Symbol('123')  

console.log(id === Cid);  // value is same but the work of symbol is do all thing uniqe so both are differnt.
 
// NonPremitive
// Function, Array, Object

let Arr = ["Abhi",  20 , "Hello"]
console.log(Arr)

let obj = {
    name : "Abhi",
    age : 20
}

    obj.age = 19 //we can access object like this 

console.log(obj)

let fun = function() {
    console.log("MyFunction")
 }  // we can store function into the variable

 console.log(fun)


 console.log(typeof Arr);  //object
 console.log(typeof obj);  //object
 console.log(typeof fun);  //function object
