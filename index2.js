const myString = "10 (of 03)";
const index = myString.indexOf(" ");

beginString = myString.slice(0, index);
endString = myString.slice(index);

console.log(beginString);
console.log(endString);
