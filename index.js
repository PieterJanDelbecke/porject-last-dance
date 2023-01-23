// const dataFieldOptions = [
//   { fieldId: "CCC", name: "D", sortOrder: 3, default: true },
//   { fieldId: "AAA", name: "yesterday", sortOrder: 2, default: false },
//   { fieldId: "BBB", name: "four", sortOrder: 3, default: true },
//   { fieldId: "AAA", name: "old", sortOrder: 1, default: false },
//   { fieldId: "CCC", name: "A", sortOrder: 0, default: true },
//   { fieldId: "BBB", name: "three", sortOrder: 2, default: false },
//   { fieldId: "CCC", name: "B", sortOrder: 1, default: false },
//   { fieldId: "CCC", name: "C", sortOrder: 2, default: false },
//   { fieldId: "AAA", name: "tomorrow", sortOrder: 3, default: true },
//   { fieldId: "BBB", name: "two", sortOrder: 1, default: false },
//   { fieldId: "BBB", name: "one", sortOrder: 0, default: true },
//   { fieldId: "CCC", name: "E", sortOrder: 4, default: true },
//   { fieldId: "AAA", name: "new", sortOrder: 0, default: true },
// ];

// // console.log(
// //   "dataFieldOption sorted",
// //   dataFieldOptions.sort((a, b) => a.sortOrder - b.sortOrder)
// // );

// const fieldOptions = {};

// for (const option of dataFieldOptions.sort(
//   (a, b) => a.sortOrder - b.sortOrder
// )) {
//   if (!fieldOptions[option.fieldId]) {
//     fieldOptions[option.fieldId] = [];
//   }
//   fieldOptions[option.fieldId].push(option);
// }

// console.log("fieldOptions", fieldOptions);

// const fieldOptions = {};

// fieldOptions["Hello"] = [];
// fieldOptions["World"] = [];
// fieldOptions["Hello"].push({ x: 5, y: 10 });

// console.log(fieldOptions);

const options = {
  AAA: {
    id: "123",
    value: "red",
  },
  BBB: {
    id: "456",
    value: "green",
  },
  CCC: {
    id: "789",
    value: "blue",
  },
};

const customers = [
  { name: "Pieter", id: "AAA" },
  { name: "Ale", id: "BBB" },
  { name: "Tony", id: "CCC" },
];

// fieldOptions["Hello"].push({ x: 5, y: 10 });

const results = [];
for (const customer of customers) {
  const data = options[customer.id];
  if (!results[customer.name]) {
    results[customer.name] = [];
  }
  results[customer.name].push(data);
}

console.log(results);
