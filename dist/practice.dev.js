"use strict";

// let x= 5;
// let y= 5;
// let sum = x && y;
// let j= x || y;
// let !x = y;
// console.log(sum);
// console.log(j);
// console.log(v);
// let quest = prompt("enter the magic number");
// // let details = document.getElementById("details");
// // let outPut = document.getElementById("output");
// let magicNum = 20;
// if (quest == magicNum && typeof(Number)) {
//     alert("you get the right number");
// }
// else if(quest < magicNum || quest > magicNum || quest === null && typeof(null)){
//     alert("you enter wrong number");
// }
// else{
//     alert("please enter the right data type");
// }
//print all numbers from -10 and 19
// let i = -10;
// while (i <= 19) {
//     console.log(i);
//     i++;
// }
// //print all even numbers from 10 and 40
// let v = 10;
// while (v <= 40) {
//     if (v % 2 ==0) {
//         console.log(v);
//     }
//     v++;
// }
// //print all odd numbers from 300 and 333
// let g = 300;
// while (g <= 333) {
//     if (g % 2 !==0) {
//         console.log(g)
//     }
//     g++;
// }
// // let start = 300;
// // let end = 333;
// // for (let i = start; i <= end; i++) {
// //     if (i % 2 !== 0) {
// //         console.log(i);
// //     }
// // }
// //print all numbers divisible by 5 and 3 from 5 and 50
// let f = 5;
// while (f <= 50) {
//     if (f % 5 == 0 && f % 3 == 0) {
//         console.log(f);
//     }
//     f++;
// }
var answer = '';

while (answer.toLowerCase() !== 'yes' && answer.toLowerCase() !== 'yeah') {
  answer = prompt('Are you there yet?');
}

alert('Yay, we finally made it!');