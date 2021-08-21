//Constructor and this

// const ReaK = { //Static object
//   name: 'ReaK AbC',
//   age: 21
// }
// console.log(ReaK);

// function Person(name, dob) { //It is class
//   this.name = name;
//   this.dob = new Date(dob);
//   this.calculate_age = function(){
//     var diff_ms = Date.now() - this.dob.getTime();
//     var age_dt = new Date(diff_ms);
//     return Math.abs(age_dt.getUTCFullYear() - 1970);
//   }
//   console.log(this.calculate_age());
// }
//
// const ReaKAbC = new Person('ReaK AbC','2-3-1999'); //Object
// const Nitish = new Person('Nitish Kumar','2-3-1999');

//Inbuilt Constructor

// const name1 = "ReaK";
// const name2 = new String('ReaK'); //name2 is object type
// name2.age = 21; //So be can add more parameter
// console.log(name2);

//similar other inbuilt constructor
// const num2 = new Number(21);
// const isTrue = new Boolean(true);
//
// const item1 = {name: 'ReaK'};
// const item2 = new Object({name: 'ReaK'});
//
// const arr1 = [1,2,3,4];
// const arr2 = new Array(1,2,3,4);
//
// const fun1 = function (x, y) { return x+y }
// const fun2 = new Function('x','y','return x+y');
//
// console.log(fun2(4,5));

//Prototype

// function Person(fname, lname, dob) { //It is class
//   this.fname = fname;
//   this.lname = lname;
//   this.dob = new Date(dob);
// }
//
// Person.prototype.calculate_age = function(){
//   var diff_ms = Date.now() - this.dob.getTime();
//   var age_dt = new Date(diff_ms);
//   return Math.abs(age_dt.getUTCFullYear() - 1970);
// }
//
// Person.prototype.setFullName = function(){
//   return `${this.fname} ${this.lname}`;
// }
//
// Person.prototype.setNewLastName = function(newLastName){
//   this.lname = newLastName;
// }
// const ReaKAbC = new Person('ReaK','AbC','2-3-1999'); //Object
// const Nitish = new Person('Nitish','Kumar','2-3-1999');
//
// //console.log(ReaKAbC.calculate_age === Nitish.calculate_age);
// console.log(ReaKAbC.calculate_age());
// console.log(ReaKAbC.setFullName());
// ReaKAbC.setNewLastName('Razz');
// console.log(ReaKAbC.setFullName());
// console.log(ReaKAbC.hasOwnProperty('fname'));

//Inheritance

// const Person = function(fname, lname){
//   this.fname = fname;
//   this.lname = lname;
// }
//
// Person.prototype.message = function(){
//   return `Hello ${this.fname} ${this.lname}`
// }
//
// const ReaK = new Person('ReaK', 'AbC');
// //console.log(ReaK.message());
//
// const Customer = function(fname, lname, mobile, email){
//   Person.call(this, fname, lname);
//   this.mobile = mobile;
//   this.email = email;
// }
//
// Customer.prototype = Object.create(Person.prototype); //inheritance
// Customer.prototype.constructor = Customer;
// const customer = new Customer('Nitish', 'Kumar', '+911234567890', 'nk@gmail.com');
// console.log(customer.message());
// console.log(customer);

//Ceate object

// const profilePrototype = {
//   message : function(){
//     return `Hello, I am ${this.fname} ${this.lname}`;
//   },
//   setNewLastName: function(lastName){
//     this.lname = lastName;
//   }
// }
//
// const ReaK = Object.create(profilePrototype);
// ReaK.fname = 'ReaK';
// ReaK.lname = 'Kumar';
// ReaK.age = 21;
// ReaK.setNewLastName('AbC');
// console.log(ReaK.message());
//
// //another way
//
// const nitish = Object.create(profilePrototype, {
//   fname: {value: 'Nitish'},
//   lname: {value: 'Kumar'},
//   age: {value: 21}
// })
//
// console.log(nitish.message());

//ES6 Javascript

// class Person{ //In ES6
//   constructor(fname, lname, dob){
//     this.fname = fname;
//     this.lname = lname;
//     this.dob = new Date(dob);
//   }
//
//   calculate_age(){
//     var diff_ms = Date.now() - this.dob.getTime();
//     var age_dt = new Date(diff_ms);
//     return Math.abs(age_dt.getUTCFullYear() - 1970);
//   }
// }
//
// const ReaKAbC = new Person('ReaK','AbC','2-3-1999'); //Object
// console.log(ReaKAbC.calculate_age());

//Sub Class inheritance

// class Person{ //In ES6
//   constructor(fname, lname, dob){
//     this.fname = fname;
//     this.lname = lname;
//     this.dob = new Date(dob);
//   }
//
//   message(){
//     return `Hello, This is ${this.fname} ${this.lname}`;
//   }
// }
//
// class Customer extends Person{
//   constructor(fname, lname, mobile, email){
//     super(fname, lname);
//     this.mobile = mobile;
//     this.email = email;
//   }
//
//   static boughtItemFee(num){
//     return num*100;
//   }
// }
//
// const ReaKAbC = new Customer('ReaK','AbC','123456', 'nk@email.com'); //Object
// console.log(ReaKAbC);
// //console.log(ReaKAbC.boughtItemFee()); //bought item is not the function of ReaK Abc - Error
// console.log(Customer.boughtItemFee(100));
