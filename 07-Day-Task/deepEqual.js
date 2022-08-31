function deepEquals(x, y) {
  //   console.log(typeof x);
  //   console.log(JSON.stringify(x).split("").sort());
  //   console.log(JSON.stringify(x).split("").sort());

  //   if (typeof x == "object" || typeof y == "object") {
  if (
    JSON.stringify(x).split("").sort().toString() ===
    JSON.stringify(y).split("").sort().toString()
  ) {
    return true;
  } else {
    return false;
  }
  //   }
  //   else if (x === y) {
  //     return true;
  //   } else {
  //     return false;
  //   }
}
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();

console.log(
  deepEquals({ a: 123, c: true, b: "abc" }, { a: 123, b: "abc", c: true })
);
console.log(
  deepEquals([[1, [2, "3", [4, 5]]], [2]], [[1, [2, 3, [4, 5]]], [2]])
);
console.log(deepEquals([[1, [2, [4, 5]]], [2]], [[1, [2, 3, [4, 5]]], [2]]));
console.log(deepEquals([], [[]]));
console.log(deepEquals([1], [1]));
console.log(deepEquals([[1]], [[1]]));
console.log(deepEquals([2, 3, [4, 5]], [2, 3, [4, 5]]));
console.log(deepEquals({ a: 123 }, { a: 123 }));
console.log(deepEquals([null, undefined, true], [null, undefined, true]));
console.log(deepEquals({}, {}));
console.log(deepEquals([1], [3]));
console.log(deepEquals([], []));
console.log(deepEquals(1, 1));
console.log(deepEquals(2, 1));
