// alert("hello");
// confirm("are u there?");
// let age = prompt("what is your age?");
// alert(`you are age is ${age}`);
// console.log("hello world");
// console.warn("hello world");
// console.error("hello World");
//single line <command/>
/* multiline <command/> */
// Variables
// var, let, const
// var is global scope***
// function say() {
//     var message = 'Hi';
// }
// console.log(message); // ReferenceError
// global variable
// var message = "Hello";
// function say() {
//     // local variable
//     var message = 'Hi';
//     console.log(message); // which message?
// }
// say();// Hi
// console.log(message); // Hello
// global variable
// var message = "Hello";
// function say() {
//     // local variable
//     message = 'Hi';
//     console.log(message); // which message?
// }
// say();// Hi
// console.log(message); // Hi
// var counter;
// console.log(counter); // undefined
// counter = 100;

// var counter;
// counter = 1;
// console.log(counter); // 1
// let & const are block-level scope
// let can  reassign
// let age = 20;
// age = 30;
// console.log(age);
// const age = 20;
// age = 30; //this is error const cannot reasign
// console.log(age);
// let age;
// console.log(age); //undefinied
// const name;
//  console.log(name);//SyntaxError
// primitive data type in javascript
//String, Numbers,Boolean,null,undefinied,Symbol(symbol are in es6)
// const name = "bobo";
// const age = 20;
// const rating = 2.2;
// const isTrue = false;
// const x = null;
// const y = undefined;
// let a;
// console.log(typeof name);
// console.log(typeof age);
// console.log(typeof rating);
// console.log(typeof isTrue);
// console.log(typeof x); //null object is bugs of js
// console.log(typeof y);
// console.log(typeof a);

// let name = "bobo";
// let age = 20;
// // Concatenation
// console.log("my name is " + name + " and age is " + age);
// let greeting = "Hi";
// let message = greeting.concat(" ", "John");

// console.log(message);
// // Template String
// console.log(`My name is ${name} and age is ${age}`);
// let a = "Hello JavaScript";
// console.log(a.length);
// console.log(a.toLowerCase());
// console.log(a.toUpperCase());
// console.log(a.substring(0, 1).toUpperCase());
// console.log(a.split("")); //change array
// let color = "white,green,blue,orange,purple";
// console.log(color.split(","));
// let str = "JavaScript String split()";
// let substrings = str.split(" ", 2);
// console.log(substrings);
// Array (can hold multiple values and any data types)
// let store = ["apple", "white", true, 33, "water", "novel"];
// console.log(store);
// console.log(store[3]);
// const colors = ["white", "green", "blue"];
// colors[1] = "pink";
// colors[4] = "grey";
// colors[5] = "black";
// colors.push("#ddd"); //add in back
// colors.unshift("#aaa"); //add in front
// // colors.pop(); //delete in back
// colors.shift(); //delete in front
// console.log(colors);
// console.log(Array.isArray(colors)); //check array
// console.log(colors.indexOf("white")); //find Index

// const person = {
//   name: "bobo",
//   age: 22,
//   gender: "male",
//   hobby: ["reading", "soccer", "running"],
//   address: {
//     street: "35street",
//     city: "Yangon",
//     township: "latha",
//   },
// };
// console.log(person.name);
// console.log(person.age);
// console.log(person.hobby[2]);
// console.log(person.address.city);

// const p = [
//   {
//     id: 1,
//     name: "phone",
//     isNew: true,
//   },
//   {
//     id: 2,
//     name: "computer",
//     isNew: true,
//   },
//   {
//     id: 3,
//     name: "desktop",
//     isNew: false,
//   },
//   {
//     id: 4,
//     name: "phone",
//     isNew: true,
//   },
// ];
// console.log(products[1].name);
// products.forEach((r) => console.log(r.name));
// const pJson = JSON.stringify(products);
// const ss = JSON.parse(pJson);
// console.log(ss);
//CONTROL FLOW
// for loop
// for (let i = 0; i < products.length; i++) {
//   let aa = products[i].isNew;
//   console.log(aa);
// }
//while loop
// let i = 0;
// while (i < products.length) {
//   let aa = products[i].name;
//   console.log(aa);
//   i++;
// }
// let i = 0;
// do {
//   console.log("hello");
//   console.log(products[i]);
//   i++;
// } while (i > products.length);
// for (const pp in products) {
//   console.log(products[pp].name);
// }
// p.forEach((a) => console.log(a.name));
// p.map((a) => console.log(a.id));
// const r = p
//   .filter(function (a) {
//     return a.isNew === true;
//   })
//   .map(function (a) {
//     console.log(a.name);
//   });
// console.log(r);
// const a = 10;
// if (a > 10) {
//   console.log("okay");
// } else if (a < 5) {
//   console.log("that's okay");
// } else {
//   console.log("fine");
// }
// const a = 5;
// const b = 10;
// if (a > 1 && b > 20) {
//   console.log("hello");
// }
// let x = 20;
// let color = x == 10 ? "red" : "blue";
// switch (color) {
//   case "white":
//     console.log("color is white");
//     break;
//   case "red":
//     console.log("color is red");
//     break;
//   case "blue2":
//     console.log("color is blue");
//     break;

//   default:
//     console.log("hello");
//     break;
// }
//JavaScript Immediately Invoked Function Expression
// (function () {
//   //...
// })();
// (function (a, b) {
//   return a + b;
// })(10, 20);
// let add = (function (a, b) {
//   return a + b;
// })(10, 20);

// console.log(add);
// function sum(a, b) {
//   console.log(a + b);
// }
// sum(23, 11);
// function sum(a = 2, b = 5) {
//   console.log(a + b);
// }
// sum();
// function sum(a, b) {
//   return a * b;
// }
// console.log(sum(22, 33));
// const res = (a, b) => {
//   return a * b;
// };
// console.log(res(1, 3));
// const age = (a) => console.log(`age is ${a}`);
// console.log(age(22));
// Constructor Function
// function Person(name, age, hobby, dob) {
//   this.name = name;
//   this.age = age;
//   this.hobby = hobby;
//   this.dob = new Date(dob);
//   this.getBirthYear = function () {
//     return this.dob.getFullYear();
//   };
//   this.profile = function () {
//     return `${this.name} ${this.age} ${this.hobby}`;
//   };
// }
// Instantiate Object
// const aa = new Person("koko", 22, "soccer", "1,1,1990");
// console.log(aa.getBirthYear());
// console.log(aa.profile());
// class Person {
//   constructor(name, age, hobby, dob) {
//     this.name = name;
//     this.age = age;
//     this.hobby = hobby;
//     this.dob = new Date(dob);
//   }
//   getBirthYear = function () {
//     return this.dob.getFullYear();
//   };
//   getProfile = function () {
//     return `${this.name} ${this.age} ${this.hobby}`;
//   };
// }
// const p1 = new Person("bobo", 22, "gamer", "2,2,1998");
// console.log(p1);
// console.log(p1.getBirthYear());
// console.log(p1.getProfile());
// console.log(window);
