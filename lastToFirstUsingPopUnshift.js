//Last to Front: Use pop() and unshift().

function lastToFront(arr){
    if(arr.length == 0) return [];
    const lastNum = arr.pop();
    arr.unshift(lastNum);
    return arr;
}

const lastToFrontResult = lastToFront([1, 2, 3, 4, 5]);
console.log(lastToFrontResult); // Output: [5, 1, 2, 3, 4]  