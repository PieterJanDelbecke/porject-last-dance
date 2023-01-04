function disemvowel(str) {
  const regex = /[aouie]/gi;
  return str.replace(regex, "");
}

console.log(disemvowel("This website is for losers LOL!"));
console.log(
  disemvowel("No offense but,\nYour writing is among the worst I've ever read")
);

console.log("Happy new Year");
