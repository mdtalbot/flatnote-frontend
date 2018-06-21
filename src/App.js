import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import NoteDetail from './components/detail'
import SearchBar from './components/searchbar'
import _ from 'lodash'

const noteAPI = 'http://localhost:4000/api/v1/notes'
const userAPI = 'http://localhost:4000/api/v1/users'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      notes: [],
      selectedNote: null
    }

    this.getNotes()
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
        .then(notes => {
          this.setState({
            notes: notes,
            selectedNote: null
          })
        })
    }
  }
  render() {
        const noteSearch = _.debounce((searchTerm) => {this.getNotes(searchTerm)}, 300)
    return (
      <div>
        <SearchBar onSearchTermChange={noteSearch} />
        <Sidebar onNoteSelect={selectedNote => this.setState({ selectedNote })} notes={this.state.notes} />
        <NoteDetail note={this.state.selectedNote} />
      </div>
    )
  }
}

export default App;