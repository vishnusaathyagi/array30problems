// Multiply by Index: arr[i] * i for all elements.
function multiplyByIndex(arr){
    return arr.map( (item, index) => item * index)
}

console.log(multiplyByIndex([1,2,3])) // [0, 2, 6]

// optimal solution
function multiplyByIndexOptimal(arr){
    for(let num of arr){
        arr[arr.indexOf(num)] = num * arr.indexOf(num);
    }
    return arr;
}
console.log(multiplyByIndexOptimal([1,2,3])) // [0, 2, 6]