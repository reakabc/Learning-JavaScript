//Try & Catch

// try {
//   const name = "xyz";
//   name = "rst";
// } catch (error) {
//   console.log(error);
// } finally {
//   console.log("Hi, This is final block!");
// }

// Regular Expression

// let re;
//
// re = /hello/ig; //i - to make is case insensitive, g - for all possible matches
// console.log(re);
// console.log(re.source);

//execute
// const result = re.exec('Hello everyone');
// console.log(result);
// console.log(result[0]);
// console.log(result.index);
// console.log(result.input);

//match
// const string = 'Hello, everyone, Hello';
// const result = string.match(re);
// console.log(result);

//test
// const result = re.test('Hello');
// console.log(result);

//search
// const string = 'Hi, Hello, Hello';
// const result = string.search(re);
// console.log(result);

//replace
// const string = 'Hi, Hello, Hello';
// const result = string.replace(re, 'Hey');
// console.log(result);

//Charactor Expression

// const str = 'The dog is running in the on street. HiHI Alan, 5g een who is 18 years old, u looking for the dog under the tree.';
//
// let re;
// re = /dog/g;
// re = /n+/g; //one n or more n
// re = /ni?/g; //n or n with i (optional)
// re = /un*/g; //8 = + ? => u or u with one or more than one n, here n is optional
// re = /.ee/g; //ee with one extra anything char at First
// re = /\./g; //all full stop
// re = /\w/g; //all Charactor
// re = /\d/g; //all digit
// re = /\s/g; //all whitespace
// re = /\S/g; //all no-space
//
// re = /\w{4}/g; //only 4 char of word with lenght 4 and more than 4 char
// re = /\w{4,}/g; //print all word of length more than 4
// re = /\w{4,5}/g; //only 4 and 5 char of word with lenght 4 and more than 4 char
// re = /[lf]o/g; //start with l or f and than o //lo or fo
// re = /[a-zA-Z0-9]g/g;
// re = /[0-9]g/g;
// re = /(t|T)he/g;
// re = /(o|n){2,3}/g; // => oo on nn
// re = /(hi)/ig;
// re = /(hi){2,3}/gi;
// re = /^T/g;
// re = /\.$/g;
//
// const result = str.match(re);
// console.log(result);
