// console

// console.log("Used by developer for debugging");
// console.warn("Hi, Keep in mind whiling finishing!");
// console.error("Hi developer, We found a error in your code. Do solve it first.");

// Variables

// var name = "ReaK AbC";
// var age = 21;
// console.log(name+" "+age);

// let and const

// let name = "Nitish Kumar";
// name = 21;
// console.log(name);

// const name = "Nitish Kumar"; //const can be declared only once
// name = 21;
// console.log(name); //error

//Data type

// var age = 12; //number
// var name = "Nitish" //String
// var x = {name:age, age:name}
// console.log(x);

// Converting to String

// let val = 999; //number to String
// val = String(val);

// val = true; //boolean to string
// val = String(val);

// val = new Date(); //date to string
// val = String(val);
// val = val.toString();

// val = [1,2,3]; //array
// val = val.toString();
// console.log(val);
// console.log(typeof val);

//Convert to number

// let val = '8'//String to number
// val = Number(val);

//val = true; //Boolean to number
//val = Number(val)

// val = null; //null is zero
// val = Number(val)

// var val;
// val = 'ReaK';
// val = '12.122';
// val = parseInt(val);
// val = parseFloat(val);
// console.log(val);

// let y = 12;
// let x = '8';
// val = y+x; //Output will be string irrespective of order of numbers
// val = x+y;
// console.log(val);
// console.log(typeof val);
// console.log(val.toFixed(2));

//Operators + - * / %

// var x = 20;
// var y = 15;
// let addition = x+y;
// let substraction = x-y;
// let multiplication = x*y;
// let division = x/y;
// let modulus = x%y; //remainder
// console.log(modulus);

//Math Object

// let val;
// val = Math.PI;
// val = Math.round(8.7);
// val = Math.round(7.2);
// val = Math.pow(8, 3);
// val = Math.sqrt(49);
// val = Math.abs(-12);
// val = Math.ceil(8.1);
// val = Math.floor(8.9);
//
//
// val = Math.min(2,5,8);
// var array = [1,2,5,4,5];
// val = Math.min(array); // we can't put array directly

// var maxOfArray = Math.max.apply(null, array);
// var minOfArray = Math.min.apply(null, array);
// console.log(minOfArray);

// val = Math.max(2,8,12,45); //we cann't put array as a arguments
//
// val = Math.random();
// val = Math.floor(1+Math.random()*5); //random value between 1 to 5
// console.log(val);

//String Methods

// const fname = "ReaK";
// const lname = "AbC";
//
// let val = fname+" "+lname; //concatination
// val = fname;
// val += lname; //Append

// let val = "Happy to see. We will 'meet again tomorrow'.";
// val = 'Happy to see. We will \'meet again tomorrow\'.'; //Escaping
// console.log(val);


// val = val.length;
// val = fname.concat(' ', lname); //concat method
// val = val.toUpperCase(); //change case to upper case
// val = val.toLowerCase(); //change case to lower case
//
// console.log(val);

//Template literal
//
// let name = "ReaK AbC";
// let age = 15;
// let drinking = 'bear';
// function drink() {
//   return age > 18 ? "Bear" : "Cock";
// }
// let message = `Hello, My name is ${name}. I am ${age} year old. I love drinking ${drink()}.`;
//
// console.log(message);

//Array

// let arr1 = [1,2,30,4,50];
// let arr2 = new Array(6,7,8,9,10);
// let users = ['ReaK', 'Rohit', 'Ishu', 'Rahul'];
// const anything = ['ReaK', 3, null, undefined, false, {name: 'ReaK', age: 21}, new Date()] //array of miscilaneous data type

// let val;
// val = arr1.length; //length of array
// val = Array.isArray(arr1); //check if arr1 is a array
// arr1[2] = "Hi, This is number three"; //change items
// arr1.push(12); //add new item at last
// arr1.unshift(0); //add new value to beggining
// let y = arr1.pop(); //remove last item and return last item
// let x = arr1.shift(); //remove from beggining


// arr1.splice(1, 1, "one", "two"); //arr.splice(position, remove_no_of_item, comma seperated variables to be inserte) //remove 1 item at 1 and insert two item 'one' and 'two' at 1
// arr1.splice(1, 2); //remove 2 item at 1
// arr1.reverse(); //reverse the array
//
// var arr2 = [2,4,6];
//
// arr1 = arr1.concat(arr2); //concat array
// users = users.sort(); //sort array
// arr1 = arr1.sort();
//
// console.log(arr1);


// val = arr1.sort(function(a,b) { //ascending order
//   return a - b;
// })
// val = arr1.sort(function(a,b) { //descending order
//   return b - a;
// })

// function gt10(num){
//   return num > 10;
// }
// val = arr1.find(gt10); //find number greater than 10, first greater value
// val = arr1.filter(gt10); //filter number greater than 10 and return new array
// console.log(val);

//practice
// let arr = [12, 15, 5, 7, 20];
// console.log(arr.filter(function(num) {
//   return num>=12;
// }));


//Date Object

// let val;
// let d = new Date();
// val = d;
// val = d.getMonth(); //get month, starting from 0 to 11
// val = d.getDate(); //get day of month
// val = d.getDay(); //day of weak
// val = d.getFullYear(); //current getFullYear
// val = d.getHours(); //get getHours
// val = d.getMinutes(); //get getMinutes
// val = d.getSeconds(); //get getSeconds
// val = d.getTime(); //miliseconds from 1 jan 1970

// console.log(val);

// similarly we can set all above values
// let d;
// d.setFullYear(2020);
// d.setMonth(4);

//d = new Date('12-25-2020 10:30:000');
// d = new Date('12/25/2020');
// d = new Date('25 December 2020');
// console.log(d);

//If statement

// let marks = 95;
// if(marks >= 80){
//   console.log("Excellent");
// }else if(marks > 60){
//   console.log("Good");
// }else{
//   console.log("Keep fighting");
// }

//check by undefined

// if(typeof marks !== 'undefined'){
//   console.log(`Your marks is ${marks}.`);
// }else{
//   console.log(`Your marks is not available!`);
// }

//Logical Operators

// let marks = 55; //And && operator
// if(marks > 60 && marks < 80){
//   console.log('Good');
// }else if(marks >= 80 && marks <= 100){
//   console.log('Excellent');
// }else{
//   console.log('Something is not good!');
// }

// let hour = 15;
// let isWeekend = true;
//
// if(hour < 10 || hour > 17 || isWeekend){ //Or || operator
//   console.log('Office is closed!');
// }else{
//   console.log('Office is open!');
// }

// let age = 20; //Ternary operator
// console.log(age < 18 ? 'You CANNOT drink.': 'You CAN drink.');

// let age = 25; //One line if else statement
// if(age < 18) console.log('You CANNOT drink.'); else console.log('You CAN drink.');

//Switch case

// let fruit = 'Guava';
// switch (fruit) {
//   case 'Apple':
//     console.log("Red");
//     break;
//
//   case 'Guava':
//     console.log('Green');
//     break;
//
//   case 'Orange':
//     console.log('Orange');
//     break;
//
//   default: console.log('Not defined');
// }

// let x = 8;
// switch (x) {
//   case x<5:
//     console.log("Less then 5");
//     break;
//
//   case x<10:
//     console.log("Betwwen 5 and 10");
//     break;
//
//   default:console.log("Greater then 10");
//
// }

//Function

// function user(name, age) {
//   return `My name is ${name}. I am ${age} years old.`;
// }

// function user(name = 'ReaK AbC', age=21) {
//   return `My name is ${name}. I am ${age} years old.`;
// }
//
// console.log(user('Nitish', 25));

//Immediate Invoked Function Expression

// let num = 15;
// (function() {
//   let num = 20;
//   console.log(num);
// })();
// console.log("Outside of IIFE"+num);


//function inside/outside Object

// const person = {
//   age:22,
//   hello: function(){
//     console.log('Say Hello!');
//   },
//   getAge:function(){
//     console.log(`I am ${this.age} years old.`);
//   }
// }
//
// person.laugh = function(){
//   console.log("Laughing!");
// }
//
// person.hello();
// person.laugh();
// person.getAge();

//For Loop

// for (var i = 0; i < 10; i++) {
//   if (i === 3) {
//     console.log("Three"); //Will add extra three 'three' at position 2
//     continue;             //will skip extra three '3' from i
//   }
//
//   if( i === 6 ){
//     console.log('Six');
//     break;
//   }
//   console.log(i);
// }

//While Loop

// let x = 0;
// while(x<10){
//   console.log(x);
//   x++;
// }

//Do while

// x = 0;
// do {
//   console.log(x);
//   x++;
// } while (x<10);

//Loop through Array

// const users = ['Reak', 'Rohit', 'Rahul', 'Ishu'];

// for (var user of users) { //forof
//   console.log(user);
// }

// users.forEach((item, i, arr) => { //foreach
//   console.log(i+1, item, arr);
// });

// const hiUsers = users.map(function(user) { //map
//   console.log(`Hi ${user}`);
// })

// const user = { //forin
//   name: 'ReaK',
//   age: 21,
//   title: 'Programmer'
// }
//
// for (var key in user) {
//   console.log(`${key} : ${user[key]}`);
// }

//Window object Methods

//window.alert("Hi, Welcome back!");

// const name = window.prompt("Enter your name here");
// window.alert(`Hi, ${name}`);

// if (window.confirm("Are you sure?")) {
//   console.log("I got you!");
// }else{
//   console.log("Thank You!");
// }

//Window object Methods

// let oh = window.outerHeight; //Window width & height
// let ow = window.outerWidth;
//
// let ih = window.innerHeight;
// let iw = window.innerWidth;
//
// console.log(ih, iw);

// let sy = window.scrollY; //window scroll in x & y direction
// let sx = window.scrollX;
// console.log(sx);
//
// let loc = window.location; //.host/.hostname/.href/.origin/.pathname/.protocol/.search
// console.log(loc);

// window.location.href="https://www.google.com"; //redirect
//
// window.location.reload; //reload
//
// window.history.go(-2); //history

 
