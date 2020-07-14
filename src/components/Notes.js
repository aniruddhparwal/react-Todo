import React, { useState } from "react"
import Note from "./Note"

handleSubmit = (e, notes, setNotes) => {
    e.preventDefault()

    setNotes([...notes, { id: 10, message: "Sss" }])
}

export default () => {

    const [notes, setNotes] = useState([
        { id: 1, message: 'it works' },
        { id: 2, message: 'second' }
    ])
    return (
        <div className="Notes">
            <form onSubmit={(e) => handleSubmit(e, notes, setNotes)}>
                <button>submit</button>
            </form>
            {
                notes.map(note => (
                    <Note message={note.message} id={note.id} />
                ))
            }
        </div>
    )
}