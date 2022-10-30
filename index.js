const myMap = new Map()

myMap.set("one", {firstName: "Pieter-Jan", lastName: "Delbecke", city: "Sydney" })
myMap.set("two", {firstName: "Alessandra", lastName: "Salso", city: "Melbourne" })

const myObj = Object.fromEntries(myMap)
const values = Object.values(myObj)

console.log(values)