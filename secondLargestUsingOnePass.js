//Second Largest: Track 'largest' and 'secondLargest' in one pass.
let arr = [3, 1, 4, 2, 5];

function secondLargestUsingOnePass(arr){
    let largest = -Infinity;
    let secondLargest = -Infinity;

    for(let num of arr){
        if(num > largest){
            secondLargest = largest;
            largest = num;
        } else if( num > secondLargest && num<largest){
            secondLargest = num;
        }
    }
    return secondLargest
}

const result = secondLargestUsingOnePass(arr);
console.log('Second largest element is: ' + result); // Output: 4