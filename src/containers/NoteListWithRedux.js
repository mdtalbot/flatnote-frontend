import React from 'react';
import { connect } from 'react-redux'

class NoteList extends React.Component {
  renderList() {
    return this.props.books.map((note) => {
      return (
        <li key={note.title} className="list-group-item">{note.title}</li>
      )
    })
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    notes: state.notes
  }
}

export default connect(mapStateToProps)(NoteList);
