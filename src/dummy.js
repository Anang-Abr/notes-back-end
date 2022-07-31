const notes = require('./notes');

// const note = notes.filter((n) => {
//   console.log(n.id);
//   console.log(n.id === '1234567891234567');
//   return n.id === '1234567891234567';
// });

console.log("before",notes)
const index = notes.findIndex((note) => note.id === 'Mo-N74ejk7ZmDySs');
if(index !== -1) {
    notes.splice(index, 1);
}

console.log(index)
console.log("after",notes)