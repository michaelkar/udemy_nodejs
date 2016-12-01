//console.log('Starting notes.js ..');

const fs = require('fs');

let fetchNotes = () => {
    try {
        let notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch (err) {
        return [];
    }
}

let saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

let addNote = (title, body) => {
    let notes = fetchNotes();
    let note = {
        title,
        body
    };

    if (notes.filter((note) => note.title === title).length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

let getAll = () => {
    return fetchNotes();
}

let getNote = (title) => fetchNotes().filter((note) => note.title === title)[0];

let removeNote = (title) => {
    let notes = fetchNotes();
    let remainigNotes = notes.filter((note) => note.title !== title);
    if (remainigNotes.length < notes.length) {
        saveNotes(remainigNotes);
        return true;
    }
}

let logNote = (message, note) => {
    if (message) console.log(message);
    console.log(note ? ` Title: ${note.title}\n Body: ${note.body}` : 'Note not found');
}

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
};

// module.exports.addNote = () => {
//     console.log('addNote');
//     return 'New note';
// };
