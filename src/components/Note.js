import React from "react"

export default ({ message, id, deleteNote }) => (
    < div className="Note" >
        <p>
            {message} | {id}
        </p>
        <div>
            <button onClick={() => deleteNote(id)}>delete this node</button>
        </div>
    </div >

)