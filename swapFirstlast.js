// swap first last element of an array
let arr = ["John", "Paul", "George", "Ringo", "Doe"];

let arr2 = [...arr]; // create a copy of the original array to avoid mutation

// using temporary variable
function swapFirstLast(){
    let temp = arr[0];
    arr[0]=arr[arr.length-1];
    arr[arr.length-1] = temp;
    return 'using temporary variable: ' + arr;
}

function swapFirstLastDestructure(){
    [arr2[0], arr2[arr2.length-1]] = [arr2[arr2.length-1], arr2[0]];
    return "using destructure method : " + arr2;
}

console.log(' input arr : ' + arr);
console.log(swapFirstLast());
console.log(swapFirstLastDestructure());

