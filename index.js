const myOldAddress = {
  name: "Pieter",
  address: {
    street: "Wyadra Ave",
    number: 10,
  },
};

const myNewAddress = {
  ...myOldAddress,
};

myNewAddress.address.street = "Westminster Ave";
myNewAddress.address.unit = 11;

console.log(myNewAddress);
