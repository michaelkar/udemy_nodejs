console.log('Starting app.js');

//see https://nodejs.org/api for additional modules
const fs = require('fs');
const os = require('os');
//utility library delivering modularity, performance & extras
//https://lodash.com/docs/
const _ = require('lodash');
const notes = require('./notes.js'); //importing local file using relative path

// console.log(_.isString(true));  //false
// console.log(_.isString('Leo')); //true
console.log(_.uniq(['Mike', 1, 'Leo', 2, 3, 4, 2, 5]));

// console.log(notes.addNote());
// challenge
// console.log('result: ' + notes.addNums(5, 6));

// let user = os.userInfo();
// fs.appendFile('greetings.txt', `Hello ${user.username}, you are ${notes.age} !`);