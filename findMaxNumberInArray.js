function maxMinSumAvg(array){
    let max = array[0]; // initialize first value as max
    let min = array[0]; // initialize first value as min
    let sum = 0; // initiate sum value

    for(let num of array){
        //console.log("num :",num);
        
        //accumulate sum
        sum+=num;
        
        // find max
        if(num > max){
            max = num;
        }
        
        // find min
        if(num < min){
            min = num;
        }
    }

    let average = sum/array.length; // calculate average

    return {'max':max,'min':min, 'sum':sum, 'average':average};
}

console.log(maxMinSumAvg([3,7,2,9,5]));


function maxMinSumAvgEasyWay(array) {
    
    const max = Math.max(...array);   // Find Max using Spread Operator
    const min = Math.min(...array);   // Find Min using Spread Operator
    
    // Calculate Sum using .reduce()
    const sum = array.reduce((acc, curr) => acc + curr, 0);
    
    // Calculate Average
    const average = sum / array.length;

    return { max, min, sum, average };
}

console.log(maxMinSumAvgEasyWay([3, 7, 2, 9, 5]));