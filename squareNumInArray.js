function squrenum(num){
    return num.map(n => n * n);
}

const result = squrenum([1, 2, 3, 4]); 
console.log(result);

//optimal solution

function squrenum(num) {
    let squaredArray = [];
    for (let item of num){
        squaredArray.push(item * item);
    }
    return squaredArray;
}

const result2 = squrenum([1, 2, 3, 4]);
console.log(result2);