import React, { Component } from 'react';
import NoteEditor from './NoteEditor';
import NoteViewer from './NoteViewer';

class Content extends Component {

  state = {
    edit: false,
    note: {},
  }
  static getDerivedStateFromProps(props, state) {
    if (state.note.id !== props.note.id) {
      return {
        edit: false,
        note: props.note,
      }
    }
    return state;
  }
  toggleEdit = () => {
    this.setState({ edit: !this.state.edit });
  }
  renderContent = () => {
    if (this.state.edit) {
      return (
        <NoteEditor
          note={this.props.note}
          onSave={this.props.onSave}
          onCancel={this.toggleEdit}
        />
      );
    } else if (this.state.note.id) {
      return (
        <NoteViewer
          note={this.props.note}
          onEdit={this.toggleEdit}
        />
      );
    }
  }
  render() {
    return (
      <div className='master-detail-element detail'>
        {this.renderContent()}
      </div>
    );
  }
}
export default Content;
