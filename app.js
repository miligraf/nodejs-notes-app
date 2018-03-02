console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');

// console.log(_.isString(true));
// console.log(_.isString('true'));

var filteredArray = _.uniq([1,1,2,2,3,3,4,4,5,56]);
console.log(filteredArray);

// var res = notes.addNote();
// console.log(res);

// console.log(notes.add(-2, 9));

// var user = os.userInfo();
//
// fs.appendFileSync('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`);
