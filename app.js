// // imports
// const fs = require('fs')
// const add = require('./utils.js')

// // two args place to write to and text to write -- notice the file doesn't have to exist.
// // Js will create the file useing the fs lib
// // when call twice will rewrite the text in the file
// // fs.writeFileSync('notes.txt', 'My name is Aaron')

// // Challenge: Append a message to notes.txt
// //
// // 1. Use appendFileSync to append to the file
// // 2. Run the script
// // 3. Check your work by opening the file and viewing the append text
// // fs.appendFileSync('notes.txt', ' Aaron Hernandez is rewriting the file')

// // cannot access variable from utils.js
// let sum = add(2, 3)
// console.log(sum)


/**
 * Challenge 2: Define and use a function in a new file
 * 1. create a new file notes.js
 * 2. create a getNotes function that returns "Your notes..."
 * 3. Export getNOtes function
 * 4. From index.js, load in and call the function printing message to console
 */

// const getNotes = require('./notes.js')

// let yourNotes = getNotes()

// console.log(yourNotes)

// const validator = require('validator')
// const getNotes = require('./notes')

// console.log(validator.isEmail('aaronexample.com'))
// console.log(validator.isURL('https'))

/**Challenge 3: Chalk
 * npm i chalk - let's up style text with node
 * 
 * 1. Install version 2.4.1 of chalk
 * 2. load chalk into app.js
 * 3. Use it to print the string 'success!' to the console. in green
 * 4. test your work
 * 
 * Bonus: use the docs to mess around with other styles. Make the text bold and inversed.
 */

 // import chalk
const chalk = require('chalk')
const yargs = require('yargs')

// console.log(chalk.green('Success!'))
// console.log(chalk.blue.bgRed.bold('hello'))

// console.log(process.argv)
// console.log(yargs.argv)
// const command = process.argv[2]

// if (command === 'add') {
//     console.log('adding note!')
// } else if (command === 'remove'){
//     console.log('Romiving note!')
// }

// customer yargs version
yargs.version('1.1.0')

// for our notes app we want to add, remove, read, list

// create command
yargs.command({
    command: 'add',
    description: 'Add a new notes',
    handler: function() {
        console.log('addiing a new note')
    }
})
