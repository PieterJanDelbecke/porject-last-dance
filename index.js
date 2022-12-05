let object = {
  firstName: "Pieter-Jan",
  lastName: "Delbecke",
  email: "pjdelbecke@gmail.com",
  phone: "0405 849 602",
};

object = { ...object, city: "Sydney" };
console.log(object);
