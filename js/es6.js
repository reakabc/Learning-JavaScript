//Iterator function


// function makeItemIterator(items) {
//   let nextIndex = 0;
//   const itemIterator = {
//     next: function(){
//       let result;
//       result = nextIndex < items.length?{
//           name: items[nextIndex++],
//           done: false
//         }:{
//           done: true
//         }
//       return result;
//     }
//   }
//   return itemIterator;
// }
//
// const itemsArr = ['ReaK', 'Rohit', 'Rahul'];
// const itemIterator = makeItemIterator(itemsArr);

// console.log(itemIterator.next());
// console.log(itemIterator.next());
// console.log(itemIterator.next());
// console.log(itemIterator.next());

// let result = itemIterator.next();
// while (!result.done) {
//   console.log(result);
//   result = itemIterator.next();
// }

//Generator function

// function* makeItemGenerator(items) {
//   for (var i = 0; i < items.length; i++) {
//     yield items[i]
//   }
// }
//
// const itemsArr = ['ReaK', 'Rohit', 'Rahul'];
// const itemGenerator = makeItemGenerator(itemsArr);
//
// let result = itemGenerator.next();
// while (!result.done) {
//   console.log(result);
//   result = itemGenerator.next();
// }

//User scroll with Iterator

// const users = [
//   {
//       "id": 7,
//       "email": "michael.lawson@reqres.in",
//       "first_name": "Michael",
//       "last_name": "Lawson",
//       "avatar": "https://reqres.in/img/faces/7-image.jpg"
//   },
//   {
//       "id": 8,
//       "email": "lindsay.ferguson@reqres.in",
//       "first_name": "Lindsay",
//       "last_name": "Ferguson",
//       "avatar": "https://reqres.in/img/faces/8-image.jpg"
//   },
//   {
//       "id": 9,
//       "email": "tobias.funke@reqres.in",
//       "first_name": "Tobias",
//       "last_name": "Funke",
//       "avatar": "https://reqres.in/img/faces/9-image.jpg"
//   }];
//
// document.querySelector('.btn-primary').addEventListener('click', nextUser);
//
// function makeUserIterator(users){
//   let nextIndex = 0;
//   const userIterator = {
//     next:function(){
//       let result;
//       result = nextIndex < users.length ? {
//         value: users[nextIndex++],
//         done: false
//       }:{
//         done: true
//       }
//       return result;
//     }
//   }
//   return userIterator;
// }
//
// const userIterator = makeUserIterator(users);
// nextUser();
// function nextUser(){
//
//   user = userIterator.next().value;
//   if(user !== undefined){
//     document.querySelector('.card-img-top').src = user.avatar;
//     document.querySelector('.card-title').innerText = user.first_name;
//     document.querySelector('.card-text').innerText = user.email;
//   }else{
//     window.location.reload();
//   }
//
// }

//Destructuring

//array
// [a,b] = [1,2];
// console.log(a);
// console.log(b);

// [a,b, ...c] = [1,2,3,4,5];
// console.log(a);
// console.log(b);
// console.log(c);

// [u1, u2, u3] = ['ReaK', 'Rohit', 'Rahul'];
// console.log(u1);

// function getItem() {
//   return ['Mango', 'Papaya', 'Gauva'];
// }
//
// [f1,f2,f3] = getItem();
// console.log(f1);

//object
// ({a,b} = {a:'Mary',b:'Amy'}); //here altering the order of a and b will not
// console.log(a);

// const user = {
//     "id": 7,
//     "email": "michael.lawson@reqres.in",
//     "first_name": "Michael",
//     "last_name": "Lawson",
//     "avatar": "https://reqres.in/img/faces/7-image.jpg"
// }
//
// const { id, email, fname, lname, avatar } = user;
// console.log(email);

//Map

// const users = new Map();
// users.set('ReaK', {job: 'Programmer', email: 'reak@gmail.com'});
// users.set('Rohit', {job: 'Singer', email: 'rk@gmail.com'});
// users.set('Rahul', {job: 'Doctor', email: 'drrk@gmail.com'});
// users.set({}, {job: 'accountant', email: 'reak@gmail.com'}); //object and function can be used as key
// users.set(function key(){}, {job: 'accountant', email: 'reak@gmail.com'});


// console.log(users);
// console.log(users.get('ReaK')); //get details
// console.log(users.has('ReaK')); //check if available
// console.log(users.size); //size of map
// console.log(users.delete('ReaK')); //delete
// console.log(users.size); //size of map

//Loop thrugh Map
// for(const [key, user] of users){
//   console.log(`${key}: ${user['job']}`);
// }
//
// for(const key of users.keys()){
//   console.log(key);
// }

// for(const user of users.values()){
//   console.log(user['job']);
// }

// users.forEach((user, key) => {
//   console.log(`${key}: ${user['job']}`);
// });

// const pairsArr = Array.from(users);
// console.log(pairsArr);
//
// const userArr = Array.from(users.values());
// console.log(userArr);
//
// const keysArr= Array.from(users.keys());
// console.log(keysArr);

//Sets

// const set1 = new Set();
//
// set1.add(5);
// set1.add('ReaK');
// set1.add(5); //dublicate value is not allowed
// set1.add({name:'ReaK', age:21})
// set1.add({name:'ReaK', age:21})//Being reference type, It is allowed, both are not same

// console.log(set1);

// const set2 = new Set(['ReaK', 21]);
// console.log(set2);
// console.log(set2.size);
// console.log(set2.has('Rohit')); //check
//
// const obj = {name: 'Rahul'};
// set2.add(obj);
// console.log(set2.size);
// console.log(set2.delete(obj));
// console.log(set2);
// console.log(set2.size);

// for(const item of set1){
//   console.log(item);
// }

// for(const item of set1.values()){
//   console.log(item);
// }

// for(const item of set1.keys()){
//   console.log(item);
// }

// for(const [key, value] of set1.entries()){
//   console.log(key);
// }

// set1.forEach((value) => {
//   console.log(value);
// });
// const arr = Array.from(set1);
// console.log(arr);
