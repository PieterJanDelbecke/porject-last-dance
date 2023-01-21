const c1 = {
  x: 5,
  y: 10,
};

const c2 = {
  x: 75,
  y: 235,
};

function printCoordinate() {
  console.log(`${this.x}, ${this.y}`);
}

let c1_func = printCoordinate.bind(c1);
let c2_func = printCoordinate.bind(c2);

c1_func();
c2_func();
