// const initialRows = [
//     { name: "one", info: { order: 1, color: "yellow" } },
//     { name: "two", info: { order: 2, color: "green" } },
//     { name: "three", info: { order: 3, color: "red" } },
//     { name: "four", info: { order: 4, color: "blue" } },
// ];

const initialRows = {
    firstName: "Pieter-Jan", lastName: "Delbecke", city: "Sydney", country: "Australia"
}

myObject1 = Object.values(initialRows)
myObject2 = Object.keys(initialRows)

console.log(myObject1)
console.log(myObject2)