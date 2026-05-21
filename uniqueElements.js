//Unique Elements: [...new Set(arr)] or filter.

arr = ["John", "Paul", "George", "Ringo", "John", "Paul"];

// using set method
console.log("set method to find unique elements :" +[...new Set(arr)]);

// using filter method

const result = arr.filter((value,index)=>{
    // console.log("index : " + index + " value : " + value);
     console.log("index of value : " + arr.indexOf(value) + " current index : " + index);
    return  arr.indexOf(value) === index;
})
console.log("filter method to find unique elements :" + result);