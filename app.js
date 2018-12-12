console.log("starting app");
const fs = require("fs");
const os = require("os");
const notes = require("./notes.js");
const _ = require("lodash"); //set of handy utilities

var user = os.userInfo();

var res = notes.addNote();
var sumRes = notes.add(3, -9);
console.log(res);
console.log(sumRes);
// fs.appendFile(
//   "greetings.txt",
//   `Hello ${user.username}! ` + `you are ${notes.age}`,
//   err => {
//     if (err) {
//       console.log("ugh");
//     } else {
//       console.log("wee");
//     }
//   }
// );

// fs.appendFile(
//   "greetings.txt",
//   `Hello ${user.username}! ` + `you are ${notes.age}`
// );
