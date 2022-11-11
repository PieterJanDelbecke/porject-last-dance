function largest(n, xs) {
  return n ? xs.sort((a, b) => a - b).slice(-n) : [];
}

console.log(largest(2, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));
console.log(largest(3, [5, 1, 5, 2, 3, 1, 2, 3, 5]));
console.log(largest(0, [5, 1, 5, 2, 3, 1, 2, 3, 5]));
console.log(largest(3, [5, 1, 5, 2, 3, 1, 2, 3, 5]));
