import React from 'react';
import ListItem from './listitem'

const Sidebar = (props) => {
  const noteItems = props.notes.map((note) => {
    return (<ListItem
      onNoteSelect={props.onNoteSelect} note={note} key={note.id}
      />
    )
  })

  return ( <ul className = "col-md-4 list-group" > {noteItems} </ul>
  )
}

export default Sidebar;
