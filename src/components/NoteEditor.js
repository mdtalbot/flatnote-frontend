import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react'

class NoteEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: this.props.note,
    }
  }

  handleChange = (event) => {
    const note = {
      ...this.state.note,
      [event.target.name]: event.target.value,
    };
    this.setState({ note });
  }
  saveChanges = (event) => {
    event.preventDefault();
    this.props.onSave(this.state.note);
  }

  render() {
    const { title, body } = this.state.note;
    return (
      <Form className="note-editor" onSubmit={this.saveChanges}>
        <Form.Field
          type="text"
          name="title"
          value={title}
          onChange={this.handleChange}
        />
        <Form.Field
          name="body"
          value={body}
          control='textarea'
          rows='20'
          onChange={this.handleChange}
        />
        <div className="button-row">
          <input className="button" type="submit" value="Save" />
          <button type="button" onClick={this.props.onCancel}>Cancel</button>
        </div>
      </Form>
    );
  }
}
NoteEditor.defaultProps = {
  note: {
    id: null,
    title: "",
    body: "",
  }
}
export default NoteEditor;
