//Find Duplicates: Use a Set or a nested loop.

let arr = ["John", "Paul", "George", "Ringo", "John", "Paul"];

// using set method
let seen = new Set();
let duplicateSet = new Set();
for (let value of arr){
    if(seen.has(value)){
        duplicateSet.add(value);
    } else {
        seen.add(value);   
    }
}

console.log("duplicate using set : " +[...duplicateSet]);

// using manual method
let duplicates = [];
for(i=0;i<arr.length;i++){
    for(j=i+1; j<arr.length; j++){
        if(arr[i] === arr[j] && !duplicates.includes(arr[i])){
            duplicates.push(arr[i]);
        }
    }
}
console.log("duplicate using manual method : " + duplicates);