// Replace Negatives: If val < 0, set val = 0.

function replaceNegatives(arr){
    arr.map((num, index) => {
        if(num < 0){
            arr[index] = 0;
        }   
    });     
    return arr;
}

const result = replaceNegatives([-1, 2, -3, 4, -5]);
console.log(result); // Output: [0, 2, 0, 4, 0]