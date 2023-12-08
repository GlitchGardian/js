obj = {}

obj.name = "Abhi"
obj.age = 20
console.log(obj);


obj.fun = function(){
    console.log(`hello ${this.name}`);
}

console.log(obj.fun());

