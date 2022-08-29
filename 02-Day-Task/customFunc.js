// Test Array Example /////////////////////////////
const arr1 = [1, 2, 3];
const arr2 = ["apple", "orange", "cherry"];
const arr3 = ["apple", 5, "cherry", 7, "", 8, " ", 9];
const arr4 = [];
// Custom Map Methods /////////////////////////////
Array.prototype.customMap = function (cb) {
  // `this` keyword points to the array itself
  const result = [];

  for (let i = 0; i < this.length; i++) {
    result.push(cb(this[i], i, this));
  }
  return result;
};

// Custom Some Methods ////////////////////////////
Array.prototype.customSome = function (fn) {
  for (let i = 0; i < this.length; i++) {
    if (fn(this[i])) {
      return true;
    }
  }
  return false;
};
console.log("----------- Some Methods ----------------");
let test1 = arr3.customSome((item) => item == " ");
let test2 = arr3.some((item) => item == "");
console.log("test1", test1);
console.log("test2", test2);
// Custom Every Methods ////////////////////////////
Array.prototype.customEvery = function (fn) {
  for (let i = 0; i < this.length; i++) {
    if (!fn(this[i])) {
      return false;
    }
  }
  return true;
};
console.log("----------- Every Methods ----------------");
test1 = arr1.customEvery((item) => item > 0);
test2 = arr1.every((item) => item > 0);
console.log("test1", test1);
console.log("test2", test2);
// Custom Filter Methods ////////////////////////////
Array.prototype.customFilter = function (fn) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (fn(this[i])) {
      result.push(this[i]);
    }
  }
  return result;
};
console.log("----------- Filter Methods ----------------");
test1 = arr3.customFilter((word) => word.length > 0);
test2 = arr3.filter((word) => word.length > 0);
console.log("test1", test1);
console.log("test2", test2);
// Custom Reduce Methods ////////////////////////////
Array.prototype.customReduce = function (fn, x) {
  let sum = this[0];
  if (x) {
    sum = fn(x, this[0]);
  }
  for (let i = 1; i < this.length; i++) {
    sum = fn(sum, this[i]);
  }
  return sum;
};
console.log("----------- Reduce Methods ----------------");
test1 = arr1.customReduce((total, num) => total + num, 6);
test2 = arr1.reduce((total, num) => total + num, 6);
console.log("test1", test1);
console.log("test2", test2);
// Custom forEach Methods ////////////////////////////
Array.prototype.customForEach = function (fn) {
  for (let i = 0; i < this.length; i++) {
    fn(this[i], i);
  }
};
console.log("----------- forEach Methods ----------------");
test1 = arr2.customForEach((item) => console.log(item));
test2 = arr2.forEach((item) => console.log(item));
// Custom Reverse Methods ////////////////////////////
Array.prototype.customReverse = function () {
  const result = [];
  for (let i = this.length - 1; i >= 0; i--) {
    result.push(this[i]);
  }
  return result;
};
console.log("----------- Reverse Methods ----------------");
test1 = arr1.customReverse();
test2 = arr1.reverse();
console.log("test1", test1);
console.log("test2", test2);
// Custom Join Methods ////////////////////////////
Array.prototype.customJoin = function (x) {
  let result = "";
  if (x) {
    for (let i = 0; i < this.length; i++) {
      result += `${this[i]}${x}`;
    }
    return result.slice(0, -`${x.length}`);
  } else if (x == "") {
    for (let i = 0; i < this.length; i++) {
      result += `${this[i]}`;
    }
    return result;
  } else if (x == undefined) {
    for (let i = 0; i < this.length; i++) {
      result += `${this[i]},`;
    }
    return result.slice(0, -1);
  }
};
console.log("----------- Join Methods ----------------");
test1 = arr1.customJoin(",");
test2 = arr1.join(",");
console.log("test1", test1);
console.log("test2", test2);
console.log("----------- Reverse Methods ----------------");
test1 = arr1.customReverse();
test2 = arr1.reverse();
console.log("test1", test1);
console.log("test2", test2);
// Custom Includes Methods ////////////////////////////
Array.prototype.customIncludes = function (x, y) {
  let sum = 0;
  for (let i = 0; i < this.length; i++) {
    if (x == this[i]) {
      if (y == i || y == undefined) {
        sum++;
      }
    }
  }
  if (sum) {
    return true;
  } else {
    return false;
  }
};
console.log("----------- Includes Methods ----------------");
test1 = arr1.customIncludes(2, 1);
test2 = arr1.includes(2, 1);
console.log("test1", test1);
console.log("test2", test2);
