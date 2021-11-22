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

// console.log(array2.map2((item)=> item *2 ));

//reduce

const array = ['apple', 'orange', 'banana', 'pech'];

let fruits = array.reduce((acc, elem)=> {
  acc[elem] = 1;
  
  return acc;
},{})

// console.log(fruits);

// Напишите алгоритм, который берет массив и перемещает все нули в конец,
// сохраняя порядок других элементов.

// let moveZeros = (arr) =>
//   arr.reduceRight(
//     (acc, val) => (val === 0 ? [...acc, val] : [val, ...acc]),
//     []
//   );

// console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"])); // returns[false,1,1,2,1,3,"a",0,0]


//Разворачивание массива массивов
let flattened = [
  [0, 1],
  [2, 3],
  [4, 5]
].reduce((a, b) => a.concat(b));
// console.log(flattened);


// Если дан двумерный массив целых чисел, верните выровненную версию массива
//  со всеми целыми числами в отсортированном (возрастающем) порядке.
// Пример: [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]],
// ваша функция должна вернуть [1, 2, 3, 4, 5, 6, 7, 8, 9].

function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function concatenate(a, b) {
  return a.concat(b);
}

const flattenAndSort = (array) => {
  return array.reduce(concatenate, []).sort(subtract);
};

// console.log(flattenAndSort([[3, 2, 1], [4, 6, 5], [], [9, 7, 8]]));

Array.prototype.reduce2 = function (f, result) {
  let i = 0;

  if (arguments.length < 2) {
    i = 1;
    result = this[0];
  }
  for (; i < this.length; i++) {
    result = f(result, this[i], i, this);
  }
  return result;
};
let a = [1, 2, 3, 4];

// console.log(a.reduce(add), a.reduce2(add));
// console.log(a.reduce(add, 10), a.reduce2(add, 10));

// arr.reduce(callback( accumulator, currentValue, [, index[, array]] )[, initialValue])

Array.prototype.reduce3 = function (callback, initialValue) {
  if (this == null) {
    throw new Error("Cant iterate over undefined or null");
  }

  let result;
  let i = 0;

  let O = Object(this);
  let len = O.length;

  if (typeof callback !== "function") {
    throw new Error("Callback is not a function");
  }

  if (arguments.length >= 2) {
    result = initialValue;
  } else {
    if (len === 0) {
      throw new Error("Reduce of empty array with no initial value");
    }
    result = O[i];
    i++;
  }

  for (; i < this.length; i++) {
    if (i in O) {
      result = callback(result, O[i], i, O);
    }
  }

  return result;
};

// console.log([1, 2, 3, 4].reduce3(add));
// console.log(a.reduce3(concatenate, "X"), a.reduce(concatenate, "X"));
