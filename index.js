const date = new Date();
console.log(date);

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

console.log(`today is ${day}/${month}/${year}`);

let currentDate = new Date().toJSON().slice(0, 10);
console.log(currentDate);

console.log(typeof currentDate);

let myDate = new Date().toLocaleDateString("au-AU");
console.log(myDate);
