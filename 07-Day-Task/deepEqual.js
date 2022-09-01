function deepEquals(x, y) {
  if (x === NaN && y === NaN) {
    return false;
  } else if (x === undefined && y === undefined) {
    return true;
  } else if (x === undefined || y === undefined) {
    return false;
  } else if (
    JSON.stringify(x).split("").sort().toString() ===
    JSON.stringify(y).split("").sort().toString()
  ) {
    return true;
  } else {
    return false;
  }
}
console.log(deepEquals([], {}));
console.log(deepEquals([1, 1], ["1", "1"]));
console.log(deepEquals(null, null));
console.log(deepEquals(null, null));
console.log(deepEquals(NaN, NaN));
console.log(deepEquals([[1, true, "abc"], [2]], [[1, true, "abc"]]));
console.log(
  deepEquals([[1, [2, 3, [4, 5]]], [2]], [[1, [2, 3, [4, "5"]]], [2]])
);

console.log(
  deepEquals({ a: 123, c: true, b: "abc" }, { a: 123, b: "abc", c: true })
);
console.log(deepEquals([[0, [1]]], [[0, [1, 2]]]));
console.log(deepEquals([[0, [1, 2]]], [[0, [1]]]));
console.log(deepEquals([[1]], [[]]));
console.log(deepEquals([[]], []));
console.log(deepEquals({ a: "123" }, { a: "123" }));
console.log(deepEquals([], []));
console.log(deepEquals("a", "b"));
console.log(deepEquals("", ""));
console.log(deepEquals(1, 0));
console.log(deepEquals(1, 1));

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
