import React, { Component, Fragment } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import Content from './Content';

class NoteContainer extends Component {
  state = {
    notes: [],
    selectedNote: {},
    search: "",
  }
  componentDidMount() {
    this.loadNotes();
  }
  loadNotes = () => {
    Adapter.getNotes()
      .then(res => {
        this.setState({ notes: [...res] });
      });
  }
  handleSearchChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }
  filteredNotes = () => {
    return this.state.notes.filter(note => note.title.toLowerCase().includes(this.state.search.toLowerCase()));
  }

  handleSelectNote = (id) => {
    const selectedNote = this.state.notes.find(note => note.id === id);
    this.setState({ selectedNote });
  }
  render() {
    return (
      <Fragment>
        <Search value={this.state.search} onChange={this.handleSearchChange} />
        <div className='container'>
          <Sidebar
            notes={this.filteredNotes()}
            onSelect={this.handleSelectNote}
            onNew={this.createNote}
          />
          <Content
            note={this.state.selectedNote}
            onSave={this.saveNotes}
          />
        </div>
      </Fragment>
    );
  }
}
export default NoteContainer;
