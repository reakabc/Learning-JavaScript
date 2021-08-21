//Document object & methods

// let doc;
// doc = document;
// doc = doc.all; //as array
// doc = doc.head;
// doc = doc.body;
// doc = doc.doctype;
// doc = doc.domain
// doc = doc.URL
// doc = doc.characterSet
// doc = doc.contentType;

// put script tag/src in body tag of html
// doc = doc.links //lists all anchertag in array
// doc = doc.links.length;
// doc = doc.links[0].classList;
// doc = doc.links[0].className;
// doc = doc.images[0].className
// doc = doc.scripts

// let scripts = doc.scripts;
// let scriptsArray = Array.from(scripts);
// scriptsArray.forEach((script, i) => {
//   console.log(script);
//   console.log(i, script.getAttribute('src'));
// });
// console.log(scripts);
// console.log(doc);

// Document.getElementById('id')

// let title;
// title = document.getElementById('title');
// title = title.innerHTML;
// title = title.id;

// change style of title
// title.style.background = 'red';
// title.style.color = 'blue';
// title.style.padding = '15px';
// title.textContent = "New Content";
// title.innerText = "2nd Content";
// console.log(title);

//Query Selector

// let item;
// item = document.querySelector('#title'); //# for id & . for class
// item = document.querySelector('.title');
// console.log(item);

// let collection; //query seletor select first item by default
// collection = document.querySelector('.collection-item').style.backgroundColor = 'red'; //fisrt child
// collection = document.querySelector('.collection-item:nth-child(2)').style.backgroundColor = 'blue'; //nth child
// collection = document.querySelector('.collection-item:last-child').style.backgroundColor = 'green'; //last-child
// collection = document.querySelector('.collection-item:nth-child(odd)').textContent = 'odd'; //last-child

// Child Node

// const list = document.querySelector('ul.collection');
// const listItem = document.querySelector('li.collection-item')
// console.log(listItem);

// const nodes = document.querySelector('ul.collection').childNodes;
// console.log('node type', nodes[1].nodeType);
// console.log('node name', nodes[2].nodeName);
// console.log(nodes);

// document.querySelector('ul.collection').children[0].id = 'special-id';
// const children = document.querySelector('ul.collection').children[0].id;
// console.log(children);

//Parent, Child and Sibling

const ul = document.querySelector('ul.collection');

// let item = ul.firstChild;
// item = ul.firstElementChild;
// item = ul.lastElementChild;
// item = ul.childElementCount;
//
let li = ul.firstElementChild;
item = li.parentElement;
item = li.parentNode;
item = li.nextElementSibling;
item = item.nextSibling;
item = li.nextElementSibling.nextElementSibling;
item = li.nextElementSibling.previousElementSibling;

console.log(item);

//Create Element

// const li = document.createElement('li');
// li.className = 'collection-item';
// li.id = 'new-item';
// li.setAttribute('title', 'New Item');
// li.appendChild(document.createTextNode('A new list'));
//
// //create a tag
// const link = document.createElement('a');
// link.className = 'secondary-content';
//
// //add icons
// link.innerHTML = 'whole code of icon';
// li.appendChild(link);
//
// document.querySelector('ul.collection').appendChild(li);

//Replace Element

// const heading = document.getElementById('title');
//
// const newHeading = document.createElement('h1');
// newHeading.id = 'title';
// newHeading.appendChild(document.createTextNode('New Title'));
//
// const header = document.querySelector('.collection-header');
// header.replaceChild(newHeading, heading);

//Events

// const button = document.querySelector('#submit-btn');
// button.addEventListener('click', onClick);
//
// function onClick(e) {
//   e.preventDefault();
//   let item;
//   item = e.target.id;
//   item = e.type;
//   item = e.timeStamp
//   item = e.clientX;
//   item = e.clientY;
//   item = e.offsetY;
//   item = e.offsetX;
//   e.target.innerText = 'I got clicked.'
//   console.log(item);
// }

//Mouse Event

// const form = document.querySelector('#test');
// const submitButton = document.querySelector('#submit-btn');
// const header = document.querySelector('h2');

// form.addEventListener('mouseover', run);
// form.addEventListener('mouseout', run);
// form.addEventListener('mouseenter', run);
// form.addEventListener('mouseleave', run);

//submitButton.addEventListener('click', run);
//submitButton.addEventListener('dblclick', run);
// submitButton.addEventListener('mousedown', run);
// submitButton.addEventListener('mouseup', run);
// submitButton.addEventListener('mousemove', run);
//
// function run(e) {
//   e.preventDefault();
//   console.log('Event type: '+e.type);
//   header.textContent = `x: ${e.offsetX}, y: ${e.offsetY}`;
// }

//Keyword Event

// const form = document.querySelector('#test');
// const name = document.querySelector('#name');
// const header = document.querySelector('h2');
// const select = document.querySelector('select');
// name.addEventListener('keydown', run);
// name.addEventListener('keyup', run);
// name.addEventListener('keypress', run);
// name.addEventListener('focus', run);
// name.addEventListener('blur', run);
// name.addEventListener('cut', run);
// name.addEventListener('copy', run);
// name.addEventListener('paste', run);
// name.addEventListener('input', run);
// select.addEventListener('change', run);
// form.addEventListener('submit', submit);

// function run(e) {
//   e.preventDefault();

//   //console.log('event type: '+e.type);
//   header.innerText = e.target.value;
// }

// function submit(e) {
//   e.preventDefault();
//   console.log('event type: '+e.type);
//   header.innerText = `Name: ${e.target.elements.name.value}, Email: ${e.target.elements.email.value}`;
// }

//Event Bubbling

//When any event occur a it keep propagating to their parents
//To stop propagation in this way

// function run(e) {
//   e.preventDefault();
//   e.stopPropagation();
//   console.log('event type: '+e.type);
//   header.innerText = e.target.value;
// }

//Event Delegation

// document.body.addEventListener('click', addFavorite);
//
// function addFavorite(e) {
//   console.log(e.target.parentElement.classList);
//   if (e.target.parentElement.classList.contains('inner-content')){
//     if(e.target.parentElement.parentElement.style['background-color'] == 'yellow'){
//       e.target.parentElement.parentElement.style['background-color'] = 'white';
//     }else{
//       e.target.parentElement.parentElement.style['background-color'] = 'yellow';
//     }
//   }
// }

//Local & Session Storage

// localStorage.setItem('name', 'ReaK AbC');
// localStorage.setItem('age', 21);
//
// sessionStorage.setItem('name', 'Nitish Kumar');
// sessionStorage.setItem('age', 22);
//
// //fetch
// const name = localStorage.getItem('name');
// const name2 = sessionStorage.getItem('name');
//
// //remove
// localStorage.removeItem('name');
// sessionStorage.removeItem('age');
//
// //clear Storage
// localStorage.clear();
// sessionStorage.clear();

//Json.parse() & Json.stringify()  //backend of to do app

// document.querySelector('#test').addEventListener('submit',
// function(e) {
//   e.preventDefault();
//   const name = document.getElementById('name').value;//e.target.elements.name.value;
//
//   let names;
//   if(localStorage.getItem('names') == null){
//     names = [];
//   }else{
//     names = JSON.parse(localStorage.getItem('names'));
//   }
//
//   names.push(name);
//   localStorage.setItem('names',JSON.stringify(names));
//
// });
//
// document.querySelector('#fetch-btn').addEventListener('click', function(e){
//   e.preventDefault();
//   const names = JSON.parse(localStorage.getItem('names'));
//   names.forEach((item) => {
//     console.log(item);
//   });
//
// })
