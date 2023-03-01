const arr = [1, 2, 3];

// let total1 = 0;
// arr.forEach((e) => (total1 = total1 + e));
// console.log(total1);
let arr1 = arr.forEach((e) => e + 2);
let arr2 = arr.map((e) => e + 2);

console.log(arr1);
console.log(arr2);
