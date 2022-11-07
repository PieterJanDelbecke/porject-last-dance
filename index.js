function accum(s) {
  const arr = s.split("");
  const newArr = arr.map((i, index) => {
     const string = i.repeat(index+1)
     return string.charAt(0).toUpperCase() + string.substring(1)
  });
  return newArr
}

console.log(accum("abcd"));
