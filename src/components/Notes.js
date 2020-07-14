import React, { useState } from "react"
import Note from "./Note"

const handleSubmit = (e, notes, setNotes, input, setInput) => {
    e.preventDefault()
    const id = (notes.length) ? notes[notes.length - 1].id + 1 : 0
    console.log("note handleSubmit id", id)
    setNotes([...notes, { id: id, message: input }])
    setInput('')
}
const deleteNote = (id, notes, setNotes) => {
    setNotes(notes.filter(note => note.id != id))
}

export default () => {

    const [notes, setNotes] = useState([
        { id: 1, message: 'it works' },
        { id: 2, message: 'second' }
    ])
    const [input, setInput] = useState('')
    return (
        <div className="Notes">
            <form onSubmit={(e) => handleSubmit(e, notes, setNotes, input, setInput)}>
                <input onChange={(e) => setInput(e.target.value)} value={input} />
                <button>submit</button>

            </form>
            {
                notes.map(note => (
                    <Note message={note.message} id={note.id} deleteNote={(id) => deleteNote(id, notes, setNotes)} />
                ))
            }
        </div >
    )
}