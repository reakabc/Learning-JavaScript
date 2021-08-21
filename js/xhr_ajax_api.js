//XMLHttpRequest xhr

// document.getElementById('test-btn').addEventListener('click', loadData);
// const header = document.getElementById('header');
// function loadData() {
//   const xhr = new XMLHttpRequest();
//
//   xhr.open('GET', 'res/data.txt', true);
//
//   // xhr.onprogress = function(){
//   //   console.log('onprogresss ready state', this.readyState);
//   // }
//
//   xhr.onload = function(){
//     if (this.status === 200) {
//       //console.log(this.responseText);
//       header.innerHTML = `<h1>${this.responseText}</h1>`
//     }
//   }
//
//   // xhr.onreadystatechange = function(){
//   //   console.log('ready state', xhr.readyState);
//   //   if (this.readyState === 4 && this.status === 200) {
//   //     console.log(this.responseText);
//   //   }
//   // }
//
//   // xhr.onerror = function(){
//   //   console.log('on error state', this.readyState);
//   // }
//
//   xhr.send();
// }

//XMLHttpRequest JSON

// document.getElementById('test-btn').addEventListener('click', loadJsonArray);
// const header = document.getElementById('header');
//
// function loadJson() {
//
//   const xhr = new XMLHttpRequest();
//   xhr.open('GET', 'res/user.json', true);
//   xhr.onload = function(){
//     if (this.status === 200) {
//       const user = JSON.parse(this.responseText);
//       const output = `<li>
//                         <img src="${user.avatar}" />
//                         <h3>${user.firstname} ${user.lastname}</h3>
//                         <p>${user.email}</p>
//                       </li>
//                      `
//                      header.innerHTML = output;
//     }
//   }
//   xhr.send();
// }
//
// function loadJsonArray() {
//
//   const xhr = new XMLHttpRequest();
//   xhr.open('GET', 'res/users.json', true);
//   xhr.onload = function(){
//     if (this.status === 200) {
//
//       const users = JSON.parse(this.responseText);
//       let output = '';
//       users.forEach((user) => {
//         output += `<li>
//                       <img src="${user.avatar}" />
//                       <h3>${user.first_name} ${user.last_name}</h3>
//                       <p>${user.email}</p>
//                     </li>
//                    `
//       });
//
//       header.innerHTML = output;
//
//     }
//   }
//   xhr.send();
// }

//Remote Data

// document.getElementById('test-btn').addEventListener('click', fetchData);
// const header = document.getElementById('header');
//
// function fetchData() {
//   const xhr = new XMLHttpRequest();
//   xhr.open('GET', 'http://localhost/fress/fetch_items.php', true);
//   xhr.onload = function(){
//     if (this.status === 200) {
//       console.log(this.responseText);
//     }
//   }
//   xhr.send();
// }

//Asynchronous Callback

// const todos = [
//   {title: "First Todo", body: "This is first Todo"},
//   {title: "Second Todo", body: "This is second Todo"}
// ]
//
// function createTodo(todo, callback) {
//   setTimeout(function(){
//     todos.push(todo);
//     callback();
//   }, 2000);
// }
//
// function getTodos() {
//   setTimeout(function(){
//     let output = '';
//     todos.forEach((item) => {
//       output += `<li>${item.title}</li>`
//     });
//     document.querySelector('#header').innerHTML = output;
//   })
// }
//
// createTodo({title:"Third Todo", body: "This is third todo"}, getTodos);

//Custom Library httpLib.js

//const http = new myHTTP();

// http.get('http://localhost/fress/fetch_items.php', function(err, res){
//   if (err) {
//     console.log(err);
//   }else{
//     console.log(res);
//   }
// });

// const data = {
//   title:'A new title',
//   body:'This is a body part'
// }
//
// http.post('http://localhost/php/post.php', data, function(err, res){
//
//   if (err) {
//     console.log(err);
//   }else{
//     console.log(res);
//   }
//
// });

// http.delete('http://localhost/php/delete.php?id=1', function(err, res){
//
//   if (err) {
//     console.log(err);
//   }else{
//     console.log(res);
//   }
//
// });

//ES6 Promises Alternate of callback function

// const todos = [
//   {title: "First Todo", body: "This is first Todo"},
//   {title: "Second Todo", body: "This is second Todo"}
// ]
//
// function createTodo(todo) {
//   return new Promise(function(resolve, reject){
//     setTimeout(function(){
//       todos.push(todo);
//       let err = false;
//       if (!err) {
//         resolve();
//       }else{
//         reject('There is an error');
//       }
//     }, 2000);
//   })
// }
//
// function getTodos() {
//   setTimeout(function(){
//     let output = '';
//     todos.forEach((item) => {
//       output += `<li>${item.title}</li>`
//     });
//     document.querySelector('#header').innerHTML = output;
//   })
// }
// createTodo({title:"Third Todo", body: "This is third todo"}).then(getTodos).catch(function(err) {
//   console.log(err);
// })

//Fetch Apis

// document.getElementById('test-btn').addEventListener('click', getRemoteJson);
// const header = document.getElementById('header');
//
// function getText() {
//   fetch('res/data.txt').then(function(res) {
//     return (res.text());
//   }).then(function (data) {
//     console.log(data);
//     header.innerHTML = data;
//   }).catch(function(err){
//     console.log("ERROR: "+err);
//   })
// }
//
// function getJSON() {
//   fetch('res/users.json').then(function(res) {
//     return (res.json());
//   }).then(function (users) {
//     users.forEach((user) => {
//       console.log(user);
//     });
//   }).catch(function(err){
//     console.log("ERROR: "+err);
//   })
// }
//
// function getRemoteJson(){
//   fetch('http://localhost/fress/fetch_items.php').then(function(res) {
//     return (res.json());
//   }).then(function (users) {
//     users.forEach((user) => {
//       console.log(user);
//     });
//   }).catch(function(err){
//     console.log("ERROR: "+err);
//   })
// }

//Arrow function

// const normalGreating = function(){
//   console.log('Greating from normal function');
// }
//
// const arrowGreating = () => console.log('Greating from arrow function');
// const returnObject = () => ({name: 'Nitish Kumar'})
//
// console.log(returnObject());

// function getText() {
//
//   fetch('res/data.txt').then(res =>res.text())
//   .then( data => {
//     console.log(data),
//     header.innerHTML = data
//   })
//   .catch( err => console.log("ERROR: "+err))
//
// }
// getText();

//Custom http with fetch Apis

//http.get('http://localhost/fress/fetch_items.php').then(data => console.log(data)).catch(err => console.log(err))

// const data = {
//   title: 'A new title',
//   body: 'This is a body part'
// }

// http.post('http://localhost/php/post.php', data).then(data => console.log(data)).catch(err => console.log(err))
// http.put('http://localhost/php/put.php', data).then(data => console.log(data)).catch(err => console.log("ERROR: "+err))
//http.delete('http://localhost/php/delete.php?id=1', data).then(data => console.log(data)).catch(err => console.log(err))

//Async & Await

// const message = async () => "You have new message";
// message().then(res => console.log(res));

// const getItems = async () => {
//   const res = await fetch('http://localhost/fress/fetch_items.php');
//   if (res.ok) {
//     const data = await res.json();
//     return data;
//   }else{
//     throw new Error('Something went wrong');
//   }
// }
//
// getItems().then(res => console.log(res))
