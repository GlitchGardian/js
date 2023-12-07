    let arr = [1,2,3,4,5] // use for define array
    console.log(arr)

    let myarray = new Array(1,2,4,5,'hello')  //also define as this format
    console.log(myarray)

    arr.push(7) //push the element at last index
    arr.push(56) 
    arr.pop //pop or delete element from last index
    arr.unshift("first") //push element at first(0th) index it is not appropriate method to add elements bexause the index of all element is shift 

    console.log(arr)

    arr.shift() //the element delete from first index

    console.log("Shifted array",arr)

    // the methods to ask a questions to array?

    console.log(arr.includes(2));  //true
    console.log(arr.includes(10)); //flase

    console.log(arr.indexOf(1)) //return index
    console.log(arr.indexOf(10)) //returen -1

    console.log(arr.join())   //use to strigify an array
    console.log(typeof arr.join())  //string

    // differnce between splice and slice

    // the slice is use to onyl print range of array
    //splice use to manupulate the array and cut the array
    // ex:

    let array = [1,2,3,4,5,6]

    console.log(array.slice(1,4)) //[ 2, 3, 4 ]
    console.log(array)  //array remain same 

    console.log(array.splice(3,5))
    console.log(array)  //[ 1, 2, 3 ] array does not remain same after the splice opration.

    let ar = [1,2,3,4,5]

    console.log(ar.slice(2,3))
    console.log(ar.splice(2,3))
    console.log(ar)

