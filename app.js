console.log("starting app");
const fs = require("fs");
const _ = require("lodash"); //set of handy utilities
const yargs = require("yargs");

const notes = require("./notes.js");

const argv = yargs.argv;
//var command = process.argv[2]; //this grabs 3rd elem in command line but better way is to use yargs
var command = argv._[0]; //this grabs first elem in the yargs array

console.log("command: ", command);
console.log("Yargs", argv);

if (command == "add") {
  notes.addNote(argv.title, argv.body);
} else if (command == "list") {
  notes.getAll();
} else if (command == "read") {
  notes.getNote(argv.title);
} else if (command == "remove") {
  notes.removeNote(argv.title);
} else {
  console.log("command not recognized");
}
