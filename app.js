 // import chalk, yargs, getNotes files
const chalk = require('chalk')
const { demandOption } = require('yargs')
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
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

// create remove command
yargs.command({
    command: 'remove',
    describe: 'revmove a note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'list the note',
    handler() {
        notes.listNotes()
    }
})

yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler(argv) {
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

 /**
  * Challenge: Setup command option and function
  * 
  * 1. setup the remove command to take a required "--title" option
  * 2. create and export a removeNote function from notes.js
  * 3. call removeNote in remove note command handler
  * 4. Have removeNote log the title of the note to be removed
  * 5. Test your work using: node app.js remove --title="some title"
  */

/**
 * Challenge: Wire up removeNote
 * 1. Load existing notes
 * 2. use array filter method to remove the matching note (if any) 
 * 3. Save the newly created array
 * 4. Test your work with a title that exists and a title that doesn't exist
 */

/**
 
 * Challenge: Use chalk to provide useful logs for remove 
 * 
 * 1. If a note is removed, print"note removed!" with a green background
 * 2. If no note is removed, print "No note found" with a red backgroud
 */

/** 
 * Challenge: wire up list command
 * 
 * 1. create and export listNotes from notes.js
 *      - "your notes" using chalk 
 *      - "print note title for each note
 * 2. Call listNotes from command handler
 * 3. Test 
 */