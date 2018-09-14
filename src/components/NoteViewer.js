import React from "react";
import { Button } from 'semantic-ui-react'


const NoteViewer = (props) => {
  if (!props.note) {
    return <div>Click a note thumbnail to display the full note.</div>
  }

    return (
      <div className="details">
        <h3>{props.note.title}</h3>
        <p>{props.note.body}</p>
        <Button content="Edit" onClick={props.onEdit} />
      </div>
    )
}

export default NoteViewer;
