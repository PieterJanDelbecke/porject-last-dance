function list_filter(l) {
  return l.filter((a) => typeof a === "number");
}

console.log(list_filter([1, 2, "a", "b"]));
console.log(list_filter([1, "a", "b", 0, 15]));
