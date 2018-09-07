import React from 'react';
import { Form } from 'semantic-ui-react'

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
      <Form></Form>
    );
  }
}
