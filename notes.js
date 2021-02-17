const { notStrictEqual } = require('assert')
const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
    return 'your notes... '
}

const addNote = (title, body) => {
    const notes = loadNotes()

    const duplicateNotes = notes.filter((note) => note.title === title)

    if (duplicateNotes.length === 0) {
        notes.push({
            title,
            body, 
        })
    
        saveNotes(notes)
    } else { console.log('note taken')}
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

module.exports = {
    getNotes,
    addNote,
    removeNote
}   