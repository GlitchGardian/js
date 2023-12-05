// These Are the basic comparisons

// console.log(3 > 2);
// console.log(3 < 2);
// console.log(3 >= 2);
// console.log(3 <= 2);
// console.log(3 != 2);
// console.log(3 == 2);

// Below are confuse to predict what the answer thats why the industry use typescript because the typeScript is not allow to compare 2 different DataTypes And other some Strict Rules
// Example:

    // console.log("3" > 0);  //true 
    // console.log("3" > "0");  //true 
    // console.log(3 > "0");  //true 
    console.log(3 == "3");  //True 
    console.log("3" == 3);  //True 
    // console.log("true" >= 1);  //true 


// There is in JavaScript The equality chack ( == ) And comparisions <, >, <= , >= ,!= work differently

// IN Comparison the the string or null is convert into the Number amd null is covert into 0

console.log(null > 0);  //false
console.log(null < 0);  //false 
console.log(null >= 0); //true
console.log(null <= 0); //true


// reason
// let Null = null
// let nulltonumber = Number(Null)
// console.log(nulltonumber);

//if we convert undefind to number the so it says NaN

console.log(undefined > 0);  //false
console.log(undefined < 0); //false
console.log(undefined == 0); //false
console.log(undefined >= NaN); //false


// also there is strictCheck in JavaScript (===) it check value and DataType

console.log(3 === "3");  //false 