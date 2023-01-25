const entries = {
  age: 40,
  address: {
    city: "Syndey",
    street: "WESTMINSTER",
  },
};

entries["address"]["street"] = "WYANDRA";

console.log(entries["address"]["street"]);
