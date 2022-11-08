function maskify(cc) {
  arr = cc.split("");
  return arr.map((i, index) => (index > arr.length - 5 ? i : "#")).join("");
}

console.log(maskify("4556364607935616"));
console.log(maskify("1"));
console.log(maskify("11111"));
