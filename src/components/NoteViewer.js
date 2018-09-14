import React from "react";


const NoteViewer = (props) => {
  if (!props.note) {
    return <div>Click a note thumbnail to display the full note.</div>
  }

    return (
      <div className="details">
        <h3>{props.note.title}</h3>
        <p>{props.note.body}</p>
      </div>
    )
}

export default NoteViewer;
