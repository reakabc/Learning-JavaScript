// const user = {
//   name: 'ReaK',
//   secret: 'I am a passionate programmer.',
//   getSecret: function(){
//     return `Hi, My name is ${this.name}. My secret is ${this.secret}`;
//   }
// }
//
// console.log(user.getSecret());

// const user = (function(){
//   let name= 'ReaK';
//   let secret= 'I am a passionate programmer.';
//   const getSecret= function(){
//     return `Hi, My name is ${name}. My secret is ${secret}`;
//   }
//   return {
//     // callGetSecret: function(){
//     //   return getSecret();
//     // }
//     getSecret
//   };
// })()
//
// //console.log(user.callGetSecret());
// console.log(user.getSecret());

//Singleton

// class TodoList{ //It is a normal class
//   constructor(){
//     this.list = [];
//   }
//   add(item){
//     this.list.push(item);
//   }
//   printAll(){
//     // this.list.forEach((item) => {
//     //   console.log(item);
//     // });
//     console.log(this.list);
//   }
// }
//
// const todo1 = new TodoList();
// todo1.add('Ram');
// todo1.add('Shyam')
// todo1.printAll();
//
// const todo2 = new TodoList();
// todo2.add('Radha');
// todo2.add('Sita')
// todo2.printAll();

// class SingleTodoList{ //It is a singleton class
//   constructor(){
//     if (SingleTodoList.instance == null) {
//       this.list = [];
//       SingleTodoList.instance = this;
//     }else{
//       return SingleTodoList.instance;
//     }
//   }
//   add(item){
//     this.list.push(item);
//   }
//   printAll(){
//     console.log(this.list);
//   }
// }
//
// const todo1 = new SingleTodoList();
// todo1.add('Ram');
// todo1.add('Shyam')
// todo1.printAll();
//
// const todo2 = new SingleTodoList();
// todo2.add('Radha');
// todo2.add('Sita')
// todo2.printAll();
//
// todo1.printAll();

//Factory Pattern

// function MemberFactory(){
//   this.createMember = function(name, type){
//     let member;
//     if (type === 'basic') {
//       member = new BasicMember(name);
//     }else if (type === 'standerd') {
//       member = new StanderdMember(name);
//     }else if (type === 'premium'){
//       member = new PremiumMember(name);
//     }
//     member.type = type;
//     member.profile = function(){
//       console.log(`${this.name} is ${this.type} member, which cost ${this.cost}`);
//     }
//     return member;
//   }
// }
//
// const BasicMember = function(name){
//   this.name = name;
//   this.cost = '$8.99';
// }
//
// const StanderdMember = function(name){
//   this.name = name;
//   this.cost = '$12.99';
// }
//
// const PremiumMember = function(name){
//   this.name = name;
//   this.cost = '$15.99';
// }
//
// const members = [];
// const factory = new MemberFactory();
// const ReaK = factory.createMember('ReaK', 'basic');
// members.push(ReaK);
// const Rohit = factory.createMember('Rohit', 'standerd');
// members.push(Rohit);
// const Rahul = factory.createMember('Rohit', 'premium');
// members.push(Rahul);
// console.log(members);

//Observer Pattern

// function Click() {
//     this.observers = []
// }
//
// Click.prototype = {
//     subscribe: function (fn) {
//         this.observers.push(fn);
//         console.log(`subscribed ${fn.name}`)
//         console.log(this.observers)
//     },
//     unsubsribe: function (fnUnSub) {
//         this.observers = this.observers.filter(function (fn) {
//             if (fn !== fnUnSub) {
//                 return fn;
//             }
//         })
//         console.log(`unsubscribed ${fnUnSub.name}`)
//         console.log(this.observers)
//     },
//     exe: function () {
//         this.observers.forEach(fn => {
//             fn.call();
//         });
//     }
// }
//
// const click = new Click();
//
// document.querySelector('.sub1').addEventListener('click', function () {
//     click.subscribe(sayHello);
// })
// document.querySelector('.unsub1').addEventListener('click', function () {
//     click.unsubsribe(sayHello);
// })
// document.querySelector('.sub2').addEventListener('click', function () {
//     click.subscribe(sayHi);
// })
// document.querySelector('.unsub2').addEventListener('click', function () {
//     click.unsubsribe(sayHi);
// })
// document.querySelector('.exe').addEventListener('click', function () {
//     click.exe()
// })
// const sayHello = function () {
//     console.log('Hello ~~~')
// }
// const sayHi = function () {
//     console.log('Hi !!!!!')
// }

//Mediator Pattern

// const User = function (name) {
//     this.name = name;
//     this.chatroom = null;
// }
//
// User.prototype = {
//     send: function (message, to) {
//         console.log('send', this)
//         this.chatroom.send(message, this, to);
//     },
//     receive: function (message, from) {
//         console.log(`${from.name} to ${this.name}: ${message}`);
//     }
// }
//
// const Chatroom = function () {
//     let users = {};
//     return {
//         // users,
//         register: function (user) {
//             users[user.name] = user;
//             user.chatroom = this;
//         },
//         send: function (message, from, to) {
//             if (to) {
//                 to.receive(message, from)
//             } else {
//                 for (const key in users) {
//                     if (users[key] !== from) {
//                         users[key].receive(message, from)
//                     }
//                 }
//             }
//         }
//     }
// }
//
// const alan = new User('Alan');
// const john = new User('John');
// const peter = new User('Peter');
// const chatroom = new Chatroom();
// // console.log('john before register', john);
// // console.log('users in chatroom before register:', chatroom.users);
// chatroom.register(alan)
// chatroom.register(john)
// chatroom.register(peter)
// // console.log('john after register', john);
// // console.log('users in chatroom after register:', chatroom.users);
//
//
// // john.send('Hi, Alan', alan)
// //alan.send('Hello, John', john)
// peter.send('Hi, Everyone')

//State Pattern

const PageState = function () {
    let currentState = new homeState(this);
    this.init = function () {
        this.change(new homeState)
    }
    this.change = function (state) {
        currentState = state;
    }
}

const homeState = function (page) {
    document.querySelector('#heading').textContent = null;
    document.querySelector('#content').innerHTML = '<h1>Home</h1>';
}
const aboutState = function (page) {
    document.querySelector('#heading').textContent = 'About page';
    document.querySelector('#content').innerHTML = '<p>about</p>';
}
const contactState = function (page) {
    document.querySelector('#heading').textContent = 'Contact page';
    document.querySelector('#content').innerHTML = '<p>contact<p>';
}

const page = new PageState();
page.init();

const home = document.getElementById('home'),
    about = document.getElementById('about'),
    contact = document.getElementById('contact');

home.addEventListener('click', e => {
    page.change(new homeState)
})
about.addEventListener('click', e => {
    page.change(new aboutState)
})
contact.addEventListener('click', e => {
    page.change(new contactState)
})
