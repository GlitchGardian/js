// Thare is two type of objects 1.null 2.object

// 1.null Object
let nulObj = {}

// 2. object 

let info = {
    Myname : "Abhishek",
    age : 20,
    Email : "abhishek@samsung.com"
}

// we can access object by two mathods
// 1st method.
console.log(info.Myname);
// 2nd method.
console.log(info["Email"]);  //the quotes are jaruri because object process keys as strings.

// if we want to change data of objects
info.Myname = "Abhishek NirmalBhai Bhatt"
console.log(info);

// after freeze the object we cannot change anything in the object
Object.freeze(info)

info.Email = "nomail"

console.log(info); 

// we can use Symbol also in the object

let sym = Symbol("chabi")

let newObj = {

    name : "Abhishek",
    [sym] : "talachabi",
    key : 2345,
    fun : function(){
        console.log("hello");
    }  // we can also store a fuunction in Object
}

// wecan access the symbol from obj 
console.log([sym]);  //only is the method to access symbol cannot access by .(dot)

console.log(newObj.fun());

console.log(newObj);

newObj.Greeting = function(){
    console.log(`hello ${this.name}`);
}

console.log(newObj.Greeting());


// there is we define object 2 type 
// 1. singleton object(constructor)
// 2. object litrerals(normal object)