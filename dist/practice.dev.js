"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// let x= 5;
// let y= 5;
// let sum = x && y;
// let j= x || y; 
// let !x = y;
// console.log(sum);
// console.log(j);
// console.log(v);
var quest = prompt("enter the magic number"); // let details = document.getElementById("details");
// let outPut = document.getElementById("output");

var magicNum = 20;

if (quest == magicNum && (typeof Number === "undefined" ? "undefined" : _typeof(Number))) {
  alert("you get the right number");
} else if (quest < magicNum || quest > magicNum || quest === null && _typeof(null)) {
  alert("you enter wrong number");
} else {
  alert("please enter the right data type");
}