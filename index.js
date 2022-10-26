// const initialRows = [
//     { name: "one", info: { order: 1, color: "yellow" } },
//     { name: "two", info: { order: 2, color: "green" } },
//     { name: "three", info: { order: 3, color: "red" } },
//     { name: "four", info: { order: 4, color: "blue" } },
// ];

const initialRows = {
    firstName: "Pieter-Jan", lastName: "Delbecke", city: "Sydney", country: "Australia"
}

myMap = new Map()
for (let [key, value] of Object.entries(initialRows)){
    myMap.set(key, value)
}

myObject = Object.fromEntries(myMap)
console.log(myMap)
console.log("-------------------------")
console.log(myObject)