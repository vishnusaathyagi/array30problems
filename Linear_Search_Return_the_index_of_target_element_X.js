
// normal linear search to find the index of target element in the array
function indexOfTargetElement(array,targetNumber){
    let index = -1 ;
    for(i=0;i<array.length;i++){
        if(array[i]==targetNumber){
            index = i;
            break;
        }
    }

    return index;
    
}

function indexOfTargetElement2(array,targetNumber){
    let i= -1;
    for(let num of array){
        if(num == targetNumber){
            return i+1; // return the index of target element   
            
        }
        i++;
    }
    return -1; // return -1 if target element is not found
}
console.log(indexOfTargetElement2([3,7,2,9,5], 5));

/**
 * Demonstrates the two easiest ways to find an index in JavaScript.
 * @param {Array} array - The list to search through.
 * @param {number} target - The number we are looking for.
 */
function findTargetIndex(array, target) {
    // 1. Using .indexOf() 
    // Best for: Simple values (numbers, strings). 
    // Logic: Scans for the exact value and returns the index or -1.
    const simpleIndex = array.indexOf(target);

    // 2. Using .findIndex()
    // Best for: Complex logic or objects.
    // Logic: Takes a callback function and returns the first index that satisfies it.
    const modernIndex = array.findIndex(element => element === target);

    return {
        viaIndexOf: simpleIndex,
        viaFindIndex: modernIndex
    };
}

// --- Test Cases ---

// 1. Target exists
console.log("Result 1:", findTargetIndex([10, 20, 30, 40], 30)); 
// Output: { viaIndexOf: 2, viaFindIndex: 2 }

// 2. Target is missing
console.log("Result 2:", findTargetIndex([10, 20, 30, 40], 99)); 
// Output: { viaIndexOf: -1, viaFindIndex: -1 }

// 3. Duplicate values (returns first occurrence)
console.log("Result 3:", findTargetIndex([5, 10, 5, 20], 5)); 
// Output: { viaIndexOf: 0, viaFindIndex: 0 }

