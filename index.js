function minMinMax(array) {
  const min = Math.min(...array);
  const max = Math.max(...array);
  return [min, max];
}

console.log(minMinMax([-1, 4, 5, -23, 24]));
console.log(minMinMax([1, 3, -3, -2, 8, -1]));
