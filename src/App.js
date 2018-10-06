import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/Sidebar'
import Content from './components/Content'
import SearchBar from './components/Searchbar'
import { Grid } from 'semantic-ui-react'
import NewNoteForm from './components/NewNoteForm'

const noteAPI = 'http://localhost:4000/api/v1/notes'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      notes: [],
      selectedNote: null,
      search: ""
    }
      this.getNotes();
  }

  getNotes(searchTerm = null) {
    if (searchTerm) {
      fetch(noteAPI)
        .then(res => res.json())
        .then(notes => {
          this.setState({
            notes: notes.filter(note => { return note.title.includes(searchTerm) }),
            selectedNote: null
          })
        })
    } else {
      fetch(noteAPI)
        .then(res => res.json())
        .then(res => {
          this.setState({
            notes: [...res],
            selectedNote: null
          })
        })
    }
  }

  handleNewNoteClick = (event) => {
    this.setState({ selectedNote: null})
  }

  filteredNotes = () => {
    return this.state.notes.filter(note => note.title.toLowerCase().includes(this.state.search.toLowerCase()));
  }

  handleSearchChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  saveNotes = (note) => {
    fetch(`http://localhost:4000/api/v1/notes/${this.state.selectedNote.id}`, {
      method: 'PATCH',
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify(
        note
      )
    })
      .then(res => {
        this.getNotes();
        this.setState({ notes: [...res]  });
      })
  }

  deleteNote = (note) => {
    fetch(`http://localhost:4000/api/v1/notes/${this.state.selectedNote.id}`, { method: 'DELETE' })
      .then(res => {
        this.getNotes();
        this.setState({ notes: [...res] });
      })
  }

  render() {

    return (
      <div className='app-container'>
        <SearchBar handleSearchChange={this.handleSearchChange} search={this.state.search} />
        <Grid padded>
          <Grid.Row>
            <Grid.Column width={4}>
              <div className='sidebar-container'>
                <Sidebar onNoteSelect={selectedNote => this.setState({ selectedNote })} notes={this.filteredNotes()} handleNewNoteClick={this.handleNewNoteClick}/>
              </div>
            </Grid.Column>
            <Grid.Column width={11}>
              <div className='detail-container'>
                {this.state.selectedNote === null ? <NewNoteForm getNotes={this.getNotes} /> : <Content note={this.state.selectedNote} onSave={this.saveNotes} onDelete={this.deleteNote}
                />}
              </div>
            </Grid.Column>
          </Grid.Row>
      </Grid>
      </div>
    )
  }
}

export default App;

