//method forEach

// let arr = [1, 2, 3];
// arr[10] = 10;

// Array.prototype.forEach2 = function (callback, thisArg) {

//   if (this == null) {
//     throw new Error("Cant iterate over undefined or null");
//   }

//   let context = this;
//   let obj = Object(this);

//   if (arguments.length > 1) {
//     context = thisArg;
//   }
//   if(typeof callback !== 'function'){
//     throw new Error("Callback is not a function");
//   }

//   let len = obj.length;
//   let i = 0;

//   while (i < len) {
//     if (i in obj) {
//       callback.call(context, this[i], i, obj);
//     }
//     i++;
//   }
//   for (let i = 0; i < arr.length; i++) {
//     callback(arr[i], i, arr);
//   }
// };

// arr.forEach2((item, index, array) => {
//   console.log({ item, index });
// });

//filter

let arr = [1, 2, 3, 4, 5, 6, -3, 15, 66, 43, 23];

// proverka na prostue chisla
function isPrime(num) {
  if (num <= 1) return false;
  else if (num === 2) return true;
  else {
    for (let i = 2; i < num; i++) if (num % i === 0) return false;
    return true;
  }
}

Array.prototype.filter2 = function (callback, thisArg) {
  if (this == null) {
    throw new Error("Cant iterate over undefined or null");
  }

  let context = this;
  let obj = Object(this);

  if (arguments.length > 1) {
    context = thisArg;
  }
  if (typeof callback !== "function") {
    throw new Error("Callback is not a function");
  }

  let len = obj.length;
  let res = [];

  for (let i = 0; i < len; i++) {
    if (i in obj) {
      let current = this[i];
      if (callback.call(context, this[i], i, obj)) {
        res.push(current);
      }
    }
  }

  return res;
};

let prime = arr.filter2(isPrime);

// console.log(prime);

//Map

// let newArray = arr.map(callback(currentValue[, index[, array]]) {
//  return element for newArray, after executing something
// }[, thisArg]);

let array2 = [1, 2, 3, 4, 5, 6, -3, 15, 66, 43, 23];

Array.prototype.map2 = function (callback, thisArg) {
  if (this == null) {
    throw new Error("Cant iterate over undefined or null");
  }

  let context = this;
  let obj = Object(this);

  if (arguments.length > 1) {
    context = thisArg;
  }
  if (typeof callback !== "function") {
    throw new Error("Callback is not a function");
  }

  let len = obj.length;
  let newArray =[];
  let i = 0;

  while (i < len) {

    if (i in obj) {
      newArray[i] =callback.call(context, this[i], i, obj);
    }

    i++;
  }

  return newArray;
};

console.log(array2.map2((item)=> item *2 ));
