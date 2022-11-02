const myMap = new Map()

myMap.set("one", {firstName: "Pieter-Jan", lastName: "Delbecke", city: "Sydney" })
myMap.set("two", {firstName: "Alessandra", lastName: "Salso", city: "Melbourne" })
myMap.set("three", {firstName: "Boris", lastName: "Johnston", city: "London" })

console.log(myMap.get("three"))