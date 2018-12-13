console.log("starting notes");

var addNote = (title, body) => {
  console.log("Adding note", title, body);
};

var getAll = () => {
  console.log("Getting all notes");
};

var getNote = title => {
  console.log(`getting note ${title}`);
};

var removeNote = title => {
  console.log(`removing note ${title}`);
};

module.exports = {
  addNote, //same as doing addNote:addNote since object we are creating has key and value same name as the function addNote
  getAll,
  getNote,
  removeNote
};
