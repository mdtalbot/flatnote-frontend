import React from "react";

const NoteDetail = ({ note }) => {
  if (!note) {
    return <div>Click a note thumbnail to display the full note.</div>
  }

  return (
      <div className="details">
      <h3>{note.title}</h3>
        <p>{note.body}</p>
      </div>
  )
}

export default NoteDetail;
