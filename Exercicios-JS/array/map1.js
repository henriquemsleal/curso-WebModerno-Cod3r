const nums = [1, 2, 3, 4, 5];

// Array.map é como um For com propósito, que não altera o array original
const dobNums = nums.map(num => num * 2);
console.log(dobNums);

const soma10 = num => num + 10;
const triplo = num => num * 3;
const moeda = num => `R$${parseFloat(num).toFixed(2).replace('.', ',')}`;

const result = nums.map(soma10).map(triplo).map(moeda);

console.log(result);
