//check for zero
const numbers = [3, 5, 0, 7, 9];
let hasZero = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === 0) {
    hasZero = true;
    break; // stop once we find zero
  }
}

console.log("Contains zero:", hasZero);


const numbers2 = [3, 5, 0, 7, 9];
const hasZero2 = numbers2.includes(0);

console.log("Contains zero using include method:", hasZero);

