import React from 'react';

const ListItem = ({ note, onNoteSelect }) => {
  return (
    <li onClick={() => onNoteSelect(note)}className="list-group-item">
          <div>
            {note.title}
          </div>

    </li>
  )
}

export default ListItem;
