export const fetchNotes = () => (
  fetch("http://localhost:4000/api/v1/notes")
);

export const fetchNote = id => (
  fetch(`http://localhost:4000/api/v1/notes/${id}`)
);

export const createNote = note => (
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
);

export const updateNote = note => (
  fetch(`http://localhost:4000/api/v1/notes/${note.id}`, {
    method: 'PATCH',
    headers: {
      "Content-Type": 'application/json'
    },
    body: JSON.stringify(
      note
    )
  })
);

export const deleteNote = id => (
  fetch(`http://localhost:4000/api/v1/notes/${id}`, { method: 'DELETE' })
);

