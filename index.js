function digitalRoot(n) {
  do {
    n = n
      .toString()
      .split("")
      .map((i) => Number(i))
      .reduce((a, b) => a + b);
  } while (n > 9);
  return n;
}

console.log(digitalRoot(16));
console.log(digitalRoot(456));
console.log(digitalRoot(100000000));
console.log(digitalRoot(300000000));
