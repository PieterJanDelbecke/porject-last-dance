function squareDigits(num) {
  return +num
    .toString()
    .split("")
    .map((item) => Math.pow(Number(item), 2))
    .join("");
}

console.log(squareDigits(3212));
