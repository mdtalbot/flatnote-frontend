import React from 'react';
import ListItem from './listitem'
import { List } from 'semantic-ui-react'

const Sidebar = (props) => {
    return (
      <List divided relaxed verticalAlign='middle' size='large'>
        <List.Item onClick={props.handleNewNoteClick}><List.Header>
          Create a New Note
      </List.Header></List.Item>
      {props.notes.map((note) => <ListItem
      onNoteSelect={props.onNoteSelect} note={note} key={note.id}/>
      )}
    </List>
    )}

export default Sidebar;
