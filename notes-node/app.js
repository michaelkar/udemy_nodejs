//console.log('Starting app.js ..');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const title = {
    describe: 'Title of note',
    demand: true,
    alias: 't'
};

const body = {
    describe: 'Body of note',
    demand: true,
    alias: 'b'
};

const argv = yargs
    .command('add', 'Add a new note', {
        title,
        body
    })
    .command('list', 'List all nodes')
    .command('read', 'Read a note', {
        title
    })
    .command('remove', 'Remove a note', {
        title
    })
    .help()
    .argv;
//let cmd = process.argv[2];
let cmd = argv._[0];
// console.log('Command: ', cmd);
// console.log('process: ', process.argv);
//console.log(' -> yargs:', argv);

if (cmd === 'add') {
    notes.logNote('Creating node:', notes.addNote(argv.title, argv.body));
} else if (cmd === 'list') {
    let allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s).`)
    allNotes.forEach((note, index) => notes.logNote(`Note ${++index}`, note));
} else if (cmd === 'read') {
    notes.logNote('Reading note:', notes.getNote(argv.title));
} else if (cmd === 'remove') {
    notes.logNote('Removing Note', notes.removeNote(argv.title));

} else {
    console.log('Command not recognised !');
}

