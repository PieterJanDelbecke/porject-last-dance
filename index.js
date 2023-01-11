function addingShifted(arrayOfArrays, shift) {
  const arr1 = arrayOfArrays[0];
  const arr2 = arrayOfArrays[1];
  const sumArr = arr1.map((number, index) => {
    return number + arr2[index];
  });
  return sumArr;
}

console.log(
  addingShifted(
    [
      [1, 2, 3, 4, 5, 6],
      [7, 7, 7, 7, 7, -7],
    ],
    0
  )
);
