// let x= 5;
// let y= 5;
// let sum = x && y;
// let j= x || y; 
// let !x = y;
// console.log(sum);
// console.log(j);
// console.log(v);
let quest = prompt("enter the magic number");
// let details = document.getElementById("details");
// let outPut = document.getElementById("output");

let magicNum = 20;

if (quest == magicNum && typeof(Number)) {
    alert("you get the right number");
}
else if(quest < magicNum || quest > magicNum || quest === null && typeof(null)){
    alert("you enter wrong number");
}
else{
    alert("please enter the right data type");
}