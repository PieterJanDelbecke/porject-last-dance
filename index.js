function descendingOrder(n) {
  let number = n
    .toString()
    .split("")
    .map((i) => Number(i));
  console.log(number);
}

console.log(descendingOrder(1021));
console.log(descendingOrder(123456789));
