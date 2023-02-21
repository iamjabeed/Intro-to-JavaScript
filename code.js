// console.warn("Hello from warn");
// console.log("Hy, there");

// 1.variables
// var name1 = "jaduu";
// var age = 22;
// console.log(name1);
// var num1 = 2;
// var num2 = 44;
// console.log(num1+num2);

/*2.Data types
    2.1 primitive data type = num, null, string, undefined, Boolean, Symbol
    2.2 reference data type = Array and Object
*/

// numbers
// var num3 = 69;
// var num4 = 23.45;
// console.log(num3);

// string
// var str1 = "this is a string"
// var str2 = "welcome to the world"
// console.log(str2);

// Booleans = true | false
// var x = true;
// var y = false;

// undefined is data type in which value is not defined
// var und;
// var und = undefined;

// arrays
// var arr = [2, "peter", 3, 6, 1, 9]
// console.log(arr[1]);
// console.log(arr);

// objects
// var grades = {
//   jaddu: 97,
//   david: 70,
//   peter: 33.35
// }
// console.log(grades);

// 3.operators in js

// arithmatic operators
// var a = 22;
// var b = 12;
// console.log("the value of a+b is ", a+b);
// console.log("the value of a-b is ", a-b);
// console.log("the value of a*b is ", a*b);
// console.log("the value of a/b is ", a/b);

// assignment operators
// var c = b;
// c +=8;  c = c+8;
// c -=8;  c = c+8;
// c *=8;  c = c+8;
// c /=8;  c = c+8;
// console.log(c);

// comparison operators
// var num7 = 22;
// var num8 = 44;
//  <,>,=,<=,>=,==

// console.log(Hy, there);
// alert("Hy, there");
// document.write("Hy, there");

// functions DRY= do not repeat yourself
// it is a piece of code to avoid over wrting of same code again and again i.e.,multiple times

// function avg(a,b){
//     return (a+b)/2;
// }

//     or

// function avg(a,b){
//     d=(a+b)/2;
//     return d;
// }

// d1= avg(5, 5);
// d2= avg(15,5);
// console.log(d1, d2);
// ex: create a function to calculate cgpa

// conditional statements
// if else
// var age = 18;
// if (age >= 18) {
//   console.log("you can vote");
// }
// else {
//   console.log("you can not vote");
// }

// swap two numbers

// while statement
// var cup = 0;
// while (cup < 100) {
//   console.log(cup);
//   cup++;
// }

// for loop
// 69 table using for loop
// for (var num = 1; num < 11; num++) {
//   var tableof = 69;
//   var resultof4 = tableof + " * " + num + " = " + (tableof * num);
//   console.log(resultof4);
// }

// functions

// function sum(a, b) {
//   var total = a + b;
//   console.log(total);
// }
// sum(69, 69)

// function sum(a, b) {
//   return total = a + b;
// }
// var funExp = sum(6, 9);
// console.log(total);

// DOM
// styling element
// const body = document.querySelector("body");
// body.style.background = "gray";
// const mainHeading = document.getElementById("main-heading");
// mainHeading.style.color = "red";
// let para = document.querySelectorAll("p");
// for (i = 0; i < para.length; i++) {
//   para[i].style.fontSize = "1rem";
//   para[i].style.color = "red";
//   para[i].style.backgroundColor = "grey";
// }
// creating elements

// adding elements
// let div = document.createElement("div");
// body.append(div);
// modifying text
// 1.innerText
// 2.textContent
// 3.innerHTML
// div.innerText = "No-Text Available";
// modifying attributes & classes
// div.setAttribute("id", "main-heading");
// div.removeAttribute("id");
// div.classList.add("division");
// div.classList.remove("division");
// div.remove();
// function addNewEl() {
//   const newDiv = document.createElement("div");
//   const newContent = document.createTextNode("FAQ");
//   newDiv.appendChild(newContent);
//   //   const currentDiv = document.querySelector(".accordion-homepage");
// }

// const mainContainer = document.getElementById("container");
// const para = document.createElement("p");
// mainContainer.append(para);
// para.innerText = "dgfew cgdhcguw wehdiuqw iuhcegqiuw udhiwjgd";
// addEventListener("input", () => {
//   let inputHolder = document.getElementById("input-holder");
//   let inputEl = document.getElementById("input-el").value;
//   inputHolder.textContent = inputEl;
// });

// accordian
// let content = document.getElementsByClassName("content-box");
// for (let i = 0; i < content.length; i++) {
//   content[i].addEventListener("click", function () {
//     this.classList.toggle("active");
//   });
// }

// ARRAYS

// const languages = ["javascript", "python", "typescript"];
//  console.log(languages);
//  console.log(languages.length);
//  languages.push('c');
//  languages.pop();
// languages.unshift('c')
// languages.shift()
//  console.log(languages);
//  console.log(typeof(languages));

// ARRAY OF Object

// const actors = [
//   {
//     name: "actor1",
//     payment: 100,
//   },
//   {
//     name: "actor2",
//     payment: 200,
//   },
//   {
//     name: "actor3",
//     payment: 300,
//   },
//   {
//     name: "actor4",
//     payment: 400,
//   },
// ];
// console.log(actors.length);
// console.log(actors[3].name);

// task: decrease the payment by 50

// for (let i = 0; i < actors.length; i++) {
//   actors[i].payment = actors[i].payment - 50;
//   console.log(actors[i].payment);
// }
// console.log(actors);

// forEach loop
// actors.forEach((val) => {
//   val.payment = val.payment - 50;
//   console.log(val.payment);
//   console.log(val.name)
// });

// for of
// for (let val of actors) {
//   val.payment = val.payment - 50;
//   console.log(val.payment);
// }

// filter
// const students = [
//   {
//     name: "student1",
//     marks: 27,
//     roll: 595,
//   },
//   {
//     name: "student2",
//     marks: 57,
//     roll: 545,
//   },
//   {
//     name: "student3",
//     marks: 47,
//     roll: 555,
//   },
//   {
//     name: "student4",
//     marks: 7,
//     roll: 590,
//   },
// ];

// const marks = [12, 22, 33, 18, 7, 1,15,15,15, 4];
// const failed=marks.filter((mark)=>{
//     if(mark===15){
//         return mark
//     }
// })
// console.log(failed);

// const failed = students.filter((val) => {
//   if (students.marks > 35) {
//     return true;
//   } else {
//     return false;
//   }
// });
// ? short cut
// const failed = students.filter((val) => students.marks < 30);
// console.log(failed);

// MAP
// const user = [
//   {
//     fname: "jaddu",
//     lname: "syed",
//   },
//   {
//     fname: "suhel",
//     lname: "syed",
//   },
// ];
// console.log(user[0].fname);

// const fullName = user.map((val) => {
//   console.log(val)
//   return {
//     fullname: `${val.fname} ${val.lname}`
//   };
// });
// console.log(fullName);

//? splice

// const arr = ["jaddu", "is", "a", "good", "boy"];
// console.log(arr);
// arr.splice(3, 0, 'very');
// console.log(arr.splice(1, 3));
// console.log(arr);
//? REDUCE
// const movies = [
//   {
//     movie: "jaddu",
//     budget: 97,
//   },
//   {
//     movie: "syed",
//     budget: 90,
//   },
//   {
//     movie: "suhel",
//     budget: 80,
//   },
// ];

// const total = movies.reduce((acc, val) => {
//   acc += val.budget;
//   return acc;
// }, 0);
//  console.log(total);

//? INDEXOF
// const admins = [6, 9, 4];
// const user = {
//   name: "xyz",
//   id: 9,
// };

// const isAdmin = admins.indexOf(user.id) > -1;
// console.log(isAdmin);
// console.log(admins.indexOf(user.id));

// WITH VARIABLES
// let student1 = "don";
// let student2 = "joe";
// let student3 = "alok";
// let student4 = "cris";
// let student5 = "richard";
// let student6 = "sara";
// let student7 = "jane";
// let student8 = "alisha";
// let student9 = "natasha";
// let student10 = "mitchel";

//?WITH ARRAY
// const array = ["don", "joe", "alok", "cris", "richard", "sara", "jane", "alisha", "natasha", "mitchel"]

// IIFE;

// function add() {
//   return a + b;
// }
// add();

// (function setUp(a, b) {
//   return a + b;
// })(6, 4);

// let a = 5;
// {
//   let a = 10;
// }
// console.log(a);

// console.log(a);
// let a = 10;

// var a = 5;
// {
//   var a = 10;
// }
// console.log(a);

// console.log(a);
// var a = 10;

// var a = {},
//   b = { key: "b" },
//   c = { key: "c" };

// a[b] = 100;
// a[c] = 200;
// console.log(a[b] + a[c]);

// window.setTimeout(()=>{location.href="exit.html"}, 5000);

// let tbl = document.getElementsByTagName("table")[0]
// console.log(tbl)
// tbl.style.display = "none"
// tbl.style.display = "hidden"
// tbl.remove()
// tbl.style.visibility = "hidden"

//?HOISTING

// function add() {
//   function inside() {
//     console.log(a + b);
//   }
//   inside();
// }

// add();
// var a = 20;
// var b = 10;

// console.log(`value of a is ${a} and value of b is ${b}`);
// var b = 5;
// let a;

// const x = 1;
// {
//   console.log(x); // ReferenceError
//   const x = 2;
// }

// (function add() {
//   console.log("IIFE");
// })();

// function add() {
// console.log("Hellowww");
//   return a + b;
// }
// add();
// module.exports = {
//   add: add,
// };

// console.log(module)
// console.log(require());

//? setTimeout

// console.log("1.script starts");

// console.log("2.script processing");

// const id = setTimeout(() => {
//   console.log("2.script processing");
// }, 100);
// clearTimeout(id);

// const id2 = setTimeout(() => {
//   console.log("2-0.script processing");
// }, 100);

// console.log("3.script right");

// for (let i = 0; i < 10; i++) {
//   console.log(`${i} Hello`);
// }
// console.log("timeout id id", id);
// console.log("4.script end");
// clearTimeout(id);

// let x = undefined;
// console.log(x);
// console.log(typeof(x))

//? callback

// function main(task2) {
//     console.log("task one completed");
// }

// function task2() {
//     console.log("task two completed");
//   setTimeout(() => {
//     console.log("task one completed");
//   }, 2000);
//   task2();
// }
// main(task2);

// setTimeout(() => {
//     console.log("task one completed");
//   }, 2000);

// function task1() {
//   console.log("task one completed");
// }

// function task2() {
//   console.log("task two completed");
// }
// task1();
// task2();

//? callback hell
//* Period of DOOM
// const heading1El = document.querySelector(".heading1");
// const heading2El = document.querySelector(".heading2");
// const heading3El = document.querySelector(".heading3");
// const heading4El = document.querySelector(".heading4");
// const heading5El = document.querySelector(".heading5");
// const heading6El = document.querySelector(".heading6");
// const heading7El = document.querySelector(".heading7");
// setTimeout(() => {
//   heading1El.textContent = "Heading 1";
//   heading1El.style.color = "red";

//   setTimeout(() => {
//     heading2El.textContent = "Heading 2";
//     heading2El.style.color = "green";

//     setTimeout(() => {
//       heading3El.textContent = "Heading 3";
//       heading3El.style.color = "yellow";

//       setTimeout(() => {
//         heading4El.textContent = "Heading 4";
//         heading4El.style.color = "salmon";

//         setTimeout(() => {
//           heading5El.textContent = "Heading 5";
//           heading5El.style.color = "blue";

//           setTimeout(() => {
//             heading6El.textContent = "Heading 6";
//             heading6El.style.color = "orange";

//             setTimeout(() => {
//               heading7El.textContent = "Heading 7";
//               heading7El.style.color = "pink";
//             }, 5000);
//           }, 2000);
//         }, 4000);
//       }, 1000);
//     }, 1000);
//   }, 3000);
// }, 1000);

//* Promises

// let carom = ["jaddu", "brad", "jessica", "lisa"];

// const playerCheck = new Promise((resolve, reject) => {
//   if (
//     carom.includes("jaddu") &&
//     carom.includes("jessica") &&
//     carom.includes("brad") &&
//     carom.includes("lisa")
//   ) {
//     resolve("lets play carom");
//   } else {
//     reject("players are not ready");
//   }
// });

// playerCheck.then(
//   (success) => {
//     console.log(success);
//   },
//   (error) => {
//     console.log(error);
//   }
// );

// const age = 2;
// const votingEligblity = new Promise((resolve, reject) => {
//   if (age >= 18) {
//     resolve("you can vote");
//   } else {
//     reject("you can not vote");
//   }
// });

// votingEligblity.then(
//   (major) => {
//     console.log(major);
//   },
//   (minor) => {
//     console.log(minor);
//   }
// );

// Closures

// function x() {
//   let a = 4;
//   return function y() {
//     console.log(a);
//   };
// }
// var z = x();
// console.log(z);
// z()

// scope
// if (Math.random() > 0.5) {
//     var x = 1;
//   } else {
//     var x = 2;
//   }
//   console.log(x);

// function makeAdder(x) {
//     return function (y) {
//       return x + y;
//     };
//   }

// const add5 = makeAdder(5);
// const add10 = makeAdder(10);

// console.log(add5(5)); // 7
// console.log(add10(5)); // 12

//* Api FETCH

// fetch("https://goweather.herokuapp.com/weather/Ny").then((res) => {
//     return res.json();
//   }).then((data) => {
//     console.log("response", data.temperature);
//   });

// fetch("https://api.chucknorris.io/jokes/random")
//   .then((res) => {
//     return res.json;
//   })
//   .then((resolve)=>{
//     console.log(resolve);
//   })
//   .catch();
