const myObject = {
  name: "Pieter",
  hobbies: ["running", "yoga"],
};

// const myObjectCopy = { ...myObject };

const myObjectCopy = structuredClone(myObject);
myObject.hobbies.push("sailing");

console.log(myObject);
console.log(myObjectCopy);
