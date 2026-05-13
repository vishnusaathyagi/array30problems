// Count Evens/Odds: Iterate and use the modulo operator (%)

// Sample array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function findOddEvenCount(arr){
  
  let oddCount = 0;
  let evenCount = 0;
  let oddValues = [];
  let evenValues = [];

  for(i=0; i<arr.length; i++){
    if(arr[i] === undefined) continue; // Skip undefined values
    if(arr[i]%2 == 0){
      evenValues.push(arr[i]);
      evenCount++;
    }
    if(arr[i]%2 !== 0){      
      oddValues.push(arr[i]);
      oddCount++;
    }
  }

  // Return arrays as they are instead of joining them into strings  
  //return { odd: oddCount, even: evenCount, oddValues: oddValues, evenValues: evenValues }; 
  
  // Return counts and values as comma-separated strings 
  return { odd: oddCount, even: evenCount, oddValues: oddValues.join(', '), evenValues: evenValues.join(', ') }; 
}

const oddEvenCount = findOddEvenCount([1, 2, 3, 4, 5, 6,, 8, 9, 10]);
console.log(oddEvenCount);
