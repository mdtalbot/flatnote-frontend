import React from 'react';
import ListItem from './ListItem'
import { List, Button, Icon } from 'semantic-ui-react'

const Sidebar = (props) => {
    return (
      <List divided relaxed verticalAlign='middle' size='large'>
        <Button fluid color="blue" className="new-note-button" icon onClick={props.handleNewNoteClick} labelPosition="left">
          <Icon name="plus circle" />
          Create a New Note</Button>
        <br></br>
      {props.notes.map((note) => <ListItem
      onNoteSelect={props.onNoteSelect} note={note} key={note.id}/>
      )}
    </List>
    )}

export default Sidebar;
