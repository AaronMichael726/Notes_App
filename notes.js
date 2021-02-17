const { notStrictEqual } = require('assert')
const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
    return 'your notes... '
}

const addNote = (title, body) => {
    const notes = loadNotes()
    // const duplicateNotes = notes.filter((note) => note.title === title) // note is the index value'
    const duplicateNote = notes.find((note) => note.title === title) // stops at first duplicate where note is the index value
    if (!duplicateNote) {
        notes.push({
            title,
            body, 
        })
    
        saveNotes(notes)
    } else { console.log('note taken')}
}

const removeNote = function(title){
    const notes = loadNotes()

    const notesToKeep = notes.filter((note) =>  note.title !== title)

    if (notesToKeep.length === notes.length){ // question: is there an instance where a note is removed and notes.length == notesToKeep.length
        console.log(chalk.bgRed('Note not found!'))
    } else {    
        saveNotes(notesToKeep)
        console.log(chalk.black.bgGreen('Note removed'))
    }   
}

const listNotes = () => {
    const notes = loadNotes()

    console.log(chalk.blue.inverse('Your Notes: '))
    notes.forEach((i) => {  // where the param is an index value similar to i
        console.log(i.title)
        console.log(i.body)
    })
}

const readNote = (title) => {
    const notes = loadNotes()

    const singleNote = notes.filter((i) => i.title === title)


    if (singleNote.length === 0) { 
        console.log(chalk.red.inverse('No Note Found')) 
    } else {
        console.log(chalk.black.inverse(singleNote[0].title))
        console.log(singleNote[0].body)
    }
}

const saveNotes = (note) => {
    const dataJSON = JSON.stringify(note)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return[]
    }
}



module.exports = { //written with es6 functionality
    getNotes,
    addNote,
    removeNote,
    listNotes,
    readNote
}   