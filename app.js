 // import chalk, yargs, getNotes files
const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

// customer yargs version
yargs.version('1.1.0')

// for our notes app we want to add, remove, read, list

// create command
yargs.command({
    command: 'add',
    describe: 'Add a new notes',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        } 
    },
    handler: function(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

// create remove command
yargs.command({
    command: 'remove',
    describe: 'revmove a note',
    handler: function() {
        console.log('Removing this note')
    }
})

/**
 * Challenge 3: Add two new commands
 * 1. setup command to support "list" command (print placeholder message for now)
 * 2. setup command to support "read" command (print placeholder message for now)
 * 3. Test your work by running both commands and ensure correct output
 */

yargs.command({
    command: 'list',
    describe: 'list the note',
    handler: function() {
        console.log('listing all notes')
    }
})

yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function() {
        console.log('Reading the note')
    }
})

yargs.parse()


/** 
 * Challenge: add an option to yargs
 * 
 * 1. setup a body option for the add command 
 * 2. configure a description, make it required, and for it to be a string
 * 3. Log the body value in the handler function 
 * 4. Test!
 * 
 */

 