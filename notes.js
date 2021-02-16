const { notStrictEqual } = require('assert')
const fs = require('fs')

const getNotes = function () {
    return 'your notes... '
}

const addNote = function(title, body) {
    const notes = loadNotes()

    // look through to confirm there aren't any duplicates
    const duplicateNotes = notes.filter(function (note) {
        return note.title === title
    }) 

    if (duplicateNotes.length === 0) {
        notes.push({
            title,
            body, 
        })
    
        saveNotes(notes)
    } else { console.log('note taken')}
}

const saveNotes = function(note) {
    const dataJSON = JSON.stringify(note) 
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function() {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return[]
    }
}

module.exports = {
    getNotes,
    addNote,
}   