const dataFieldOptions = [
  { fieldId: "CCC", name: "D", sortOrder: 3, default: true },
  { fieldId: "AAA", name: "yesterday", sortOrder: 2, default: false },
  { fieldId: "BBB", name: "four", sortOrder: 3, default: true },
  { fieldId: "AAA", name: "old", sortOrder: 1, default: false },
  { fieldId: "CCC", name: "A", sortOrder: 0, default: true },
  { fieldId: "BBB", name: "three", sortOrder: 2, default: false },
  { fieldId: "CCC", name: "B", sortOrder: 1, default: false },
  { fieldId: "CCC", name: "C", sortOrder: 2, default: false },
  { fieldId: "AAA", name: "tomorrow", sortOrder: 3, default: true },
  { fieldId: "BBB", name: "two", sortOrder: 1, default: false },
  { fieldId: "BBB", name: "one", sortOrder: 0, default: true },
  { fieldId: "CCC", name: "E", sortOrder: 4, default: true },
  { fieldId: "AAA", name: "new", sortOrder: 0, default: true },
];

// console.log(
//   "dataFieldOption sorted",
//   dataFieldOptions.sort((a, b) => a.sortOrder - b.sortOrder)
// );

const fieldOptions = {};

for (const option of dataFieldOptions.sort(
  (a, b) => a.sortOrder - b.sortOrder
)) {
  if (!fieldOptions[option.fieldId]) {
    fieldOptions[option.fieldId] = [];
  }
  fieldOptions[option.fieldId].push(option);
}

console.log("fieldOptions", fieldOptions);
