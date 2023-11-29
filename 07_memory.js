// in JavaScript We have 2 Memory types:
// 1. Stack (used by Premitive datatypes)
// 2. Heap (used by Referance datatypes)

// in the premitive datatype if we change into the value of variable so it's change into the copy of variable not into actual variable 

// for example

let a = "Abhi";

let b = a; 

b  = "Abhishek"

console.log(`a:${a}`);
console.log(`b:${b}`);


// meanwhile in referance type variable we see that the actual value of original variable is change 

// for example

let info = {
    name : "Abhi",
    age : 20
}

let information = info;

information.name = "Abhishek"


console.log(info)
console.log(information)

// you can see that in output at both places the changes is made so in Reference datatype the referance is passed not copy 


let arr = ["Abhi","Bhatt"]

let array = arr

arr[0] = "Abhishek";

console.table(arr);