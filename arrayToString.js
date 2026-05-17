// Join to String: Use .join(",") or manual concatenation.

let arr = ["John", "Paul", "George", "Ringo", "Doe"];

// using join method
function arrayToString(arr){
    return arr.join(", ");
}

console.log(arrayToString(arr));

//using manual concat

function arrayToStringManual(arr){
    let result="";
    for(let i=0;i<arr.length; i++){
        result += arr[i];
        if(i < arr.length-1) result += ", ";
    }
    return result;
}

console.log(arrayToStringManual(arr));