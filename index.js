const initialRows = [
    { name: "one", info: { order: 1, color: "yellow" } },
    { name: "two", info: { order: 2, color: "green" } },
    { name: "three", info: { order: 3, color: "red" } },
    { name: "four", info: { order: 4, color: "blue" } },
];

const myRows = new Map()

for (let row of initialRows){
    myRows.set(row.name, row.info)
}

console.log(myRows.get("four"))