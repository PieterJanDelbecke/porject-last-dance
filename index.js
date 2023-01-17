function getMiddle(s) {
  const length = s.length;
  return length % 2 === 0
    ? s.slice(length / 2 - 1, length / 2 + 1)
    : s.charAt(Math.floor(length / 2));
}

console.log(getMiddle("test"));
console.log(getMiddle("testing"));
console.log(getMiddle("middle"));
console.log(getMiddle("A"));

// console.log(Math.floor(5 / 3));
