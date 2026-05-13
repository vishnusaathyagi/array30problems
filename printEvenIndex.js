//print elements at even index position

function printEvenIndex(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            console.log(arr[i]);
        }
    }       

}

// Example usage:
const myArray = ['a', 'b', 'c', 'd', 'e', 'f'];
printEvenIndex(myArray);