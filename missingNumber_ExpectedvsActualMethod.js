//Missing Number: (Expected Sum - Actual Sum) logic.
let arr = [1, 2, 3, 4, 6];
let n = 6; // Total numbers from 1 to n

let expectedSum = (n * (n + 1)) / 2; // Formula for sum of first n natural numbers
let actualSum = arr.reduce((previous, currValue) => {
    //console.log("previous : " + previous + " current value : " + currValue);
    return previous + currValue;
}, 0);

let missingNumber = expectedSum - actualSum;
console.log("Expected Sum : " + expectedSum);
console.log("Actual Sum : " + actualSum);
console.log("Missing number is : " + missingNumber);