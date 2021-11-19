//method forEach

let arr = [1, 2, 3];
arr[10] = 10;

Array.prototype.forEach2 = function (callback, thisArg) {

  if (this == null) {
    throw new Error("Cant iterate over undefined or null");
  }

  let context = this;
  let obj = Object(this);

  if (arguments.length > 1) {
    context = thisArg;
  }
  if(typeof callback !== 'function'){
    throw new Error("Callback is not a function");
  }

  let len = obj.length;
  let i = 0;

  while (i < len) {
    if (i in obj) {
      callback.call(context, this[i], i, obj);
    }
    i++;
  }
  // for (let i = 0; i < arr.length; i++) {
  //   callback(arr[i], i, arr);
  // }
};

arr.forEach2((item, index, array) => {
  console.log({ item, index });
});
