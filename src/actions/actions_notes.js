export const RECEIVE_ALL_NOTES = "GET_ALL_NOTES";
export const RECEIVE_NOTE = "GET_NOTE";
export const MAKE_NOTE = "CREATE_NOTE";
export const UPDATE_NOTE = "UPDATE_NOTE";
export const DELETE_NOTE = "DELETE_NOTE";
export const CURRENT_NOTE = "CURRENT_NOTE";

const noteAPI = 'http://localhost:4000/api/v1/notes'

export const getNotes = () => dispatch => (noteAPI.getNotes()
  .then(notes => dispatch(receiveNotes(notes)))
);

export const getNote = note => dispatch => (
  noteAPI.getNote(note.id)
    .then(newNote => dispatch(receiveNote(newNote)))
);

export const createNote = note => dispatch => (
  noteAPI.createNote(note)
    .then(newNote => dispatch(makeNote(newNote)))
);
