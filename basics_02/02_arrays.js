let indian_heroes = ["baalveer" ,"shaktiman"]
let marvel_heroes = ["ironman", "thor"]

// indian_heroes.push(marvel_heroes)

console.log(indian_heroes);  //the array is accept any value in it array,object,boolean..etc  output [ 'baalveer', 'shaktiman', [ 'ironman', 'thor' ] ]

// console.log(indian_heroes[2]) //[ 'ironman', 'thor' ] 
// console.log(indian_heroes[2][0]) // ironman   we giving 2 index for nested array. this is not professional way to do.

// let combined_heroes = indian_heroes.concat(marvel_heroes)  

// console.log(combined_heroes);  //[ 'baalveer', 'shaktiman', 'ironman', 'thor' ]


// but we can use spread oprarator to do this 

let my_new_heros = [...indian_heroes , ...marvel_heroes]

console.log(my_new_heros); //[ 'baalveer', 'shaktiman', 'ironman', 'thor' ] same thing as concat nut with different oprator


// also spread oprator is use for the do copy of array.

let desi_hero = [...indian_heroes]

console.log(desi_hero);  //now if i am do any thing with desi_hero there is no changes in indian_heroes because this is the copy not referance 

let gando_array = [1,2,3,[4,5],6,7,[8,9,[10,11]]]

let dayo_array = gando_array.flat(Infinity)  //flat Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth

console.log(dayo_array); //[ 1, 2, 3, 4,  5,  6, 7, 8, 9, 10,  11]

let ss = [2,32,425,36,7]
let bb = [23,3,4,45,5443]

console.log(Array.of(bb,ss));  //[ [ 23, 3, 4, 45, 5443 ], [ 2, 32, 425, 36, 7 ] ]  don't do that

// also use as 
let a1 = 3
let a2 = 6
let a3 = 7

console.log(Array.of(a1,a2,a3)); //[ 3, 6, 7 ]