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
      <Form>
        <Form.Field>
          <label>Title</label>
          <input placeholder='Enter title here' />
        </Form.Field>
        <Form.Field>
          <Form.Field label='Body' placeholder='Start typing here to create your note.' control='textarea' rows='20' />
        </Form.Field>
        <Button type='submit'>Save</Button>
      </Form>
    );
  }
}
