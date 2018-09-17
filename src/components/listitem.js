import React from 'react';
import Moment from 'moment';
import { List } from 'semantic-ui-react'

const ListItem = ({ note, onNoteSelect }) => {
  return (
    <List.Item className='note-list-item' onClick={() => onNoteSelect(note)}>
      <List.Content>
        <List.Header>{note.title}</List.Header>
        <List.Description>Created on: {Moment(note.created_at).format('LLL')}
          <br></br>
        Updated on: {Moment(note.updated_at).format('LLL')}
        </List.Description>
        </List.Content>
    </List.Item>
  )
}

export default ListItem;
