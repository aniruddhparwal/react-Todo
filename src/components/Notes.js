import React, { useState } from "react"
import Note from "./Note"


const handleSubmit = (e, notes, setNotes, input, setInput, dateTime, setDateTime) => {
    e.preventDefault()
    if (input.length != 0) {
        const id = (notes.length) ? notes[notes.length - 1].id + 1 : 1
        // console.log("note handleSubmit id", id)
        setNotes([...notes, { id: id, message: input, deadline: dateTime }])
        console.log("dssdd", notes)
        setInput('')
        setDateTime('')
    }
}
const deleteNote = (id, notes, setNotes) => {
    setNotes(notes.filter(note => note.id != id))
}


export default () => {
    const [notes, setNotes] = useState([
    ])
    const [input, setInput] = useState('')
    const [dateTime, setDateTime] = useState('')
    return (
        <div className="Notes">
            <form onSubmit={(e) => handleSubmit(e, notes, setNotes, input, setInput, dateTime, setDateTime)}>
                <input onChange={(e) => setInput(e.target.value)} value={input} />
                <input type="datetime-local" onChange={(e) => setDateTime(e.target.value)} value={dateTime} />
                <button>submit</button>

            </form>
            {
                notes.map(note => (
                    <Note message={note.message} id={note.id} dateTime={note.deadline} deleteNote={(id) => deleteNote(id, notes, setNotes)} />
                ))
            }
        </div >
    )
}