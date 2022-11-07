function accum(s) {
  return s.split("").map((i, index) => {
     const string = i.toLowerCase().repeat(index+1)
     return i.repeat(index+1).charAt(0).toUpperCase() + string.substring(1)
  }).join("-");
}

console.log(accum("abcd"));
