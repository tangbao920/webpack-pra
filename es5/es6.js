"use strict";

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var add = function add(a, b) {
  return a + b;
};
var arry = [1, 2, 4, 2, 4, 0];
var a = [].concat(_toConsumableArray(new Set(arry)));
console.log(a);