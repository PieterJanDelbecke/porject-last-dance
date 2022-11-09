function fizzbuzz(n) {
  const arr = [];
  for (let i = 1 ; i <= n; i++) {
    let a = "",
      b = "";
    if (i % 3 === 0) {
      a = "Fizz";
    }
    if (i % 5 === 0) {
      b = "Buzz";
    }
    const result = a + b ? a + b : i;
    arr.push(result);
  }
  return arr;
}

console.log(fizzbuzz(20));
