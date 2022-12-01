function digitalRoot(n) {
  return n
    .toString()
    .split("")
    .map((num) => Number(num))
    .reduce((a, b) => a + b);
}

console.log(digitalRoot(16));
console.log(digitalRoot(456));
