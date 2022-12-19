function descendingOrder(n) {
  let number = +n
    .toString()
    .split("")
    .map((i) => Number(i))
    .sort((a, b) => b - a)
    .join("");
  return number;
}

console.log(descendingOrder(1021));
console.log(descendingOrder(123456789));
