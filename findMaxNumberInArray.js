function max(array){
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

console.log(max([3,7,2,9,5]));