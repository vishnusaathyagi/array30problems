//Frequency Map: Create an object to store counts of each item.
let arr = ["John", "Paul", "George", "Ringo", "John", "Paul"];
let frequencyMap = {};

for(let item of arr){
    // console.log("frequency of map :", frequencyMap[item]);
    if(frequencyMap[item]){
        frequencyMap[item]+=1;
        console.log("frequency of map after incrementing :", frequencyMap[item]);
    } else {
        frequencyMap[item] = 1;
    }
}