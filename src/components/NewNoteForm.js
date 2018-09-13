import React from 'react';
import { Form, Button } from 'semantic-ui-react'

export default class NewNoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: ''
    };
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.state)
    this.setState({
      title: '',
      body: ''
    })
    fetch(`http://localhost:4000/api/v1/notes`, {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify({
        title: this.state.title,
        body: this.state.body
      })
    })
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Field onChange={this.handleChange} value={this.state.title}>
          <label>Title</label>
          <input name="title" placeholder='Enter title here' />
        </Form.Field>
        <Form.Field onChange={this.handleChange} value={this.state.body} name="body" label='Body' placeholder='Start typing here to create your note.' control='textarea' rows='20' />
        <Button type='submit'>Save</Button>
      </Form>
    );
  }
}
