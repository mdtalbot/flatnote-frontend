export const RECEIVE_ALL_NOTES = "GET_ALL_NOTES";
export const RECEIVE_NOTE = "GET_NOTE";
export const MAKE_NOTE = "CREATE_NOTE";
export const UPDATE_NOTE = "UPDATE_NOTE";
export const DELETE_NOTE = "DELETE_NOTE";
export const CURRENT_NOTE = "CURRENT_NOTE";

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

export const updateNote = note => dispatch => (
  noteAPI.updateNote(note)
    .then(newNote => dispatch(patchNote(newNote)))
);

export const deleteNote = note => dispatch => (
  noteAPI.deleteNote(note.id)
    .then(newNote => dispatch(removeNote(newNote)))
);

export const receiveNotes = notes => ({
  type: RECEIVE_ALL_NOTES,
  notes
});

export const receiveNote = note => ({
  type: RECEIVE_NOTE,
  note
});

export const patchNote = note => ({
  type: UPDATE_NOTE,
  note
});

export const makeNote = newNote => ({
  type: MAKE_NOTE,
  newNote
});

export const removeNote = deletedNote => ({
  type: DELETE_NOTE,
  deletedNote
});

export const setCurrentNote = note => ({
  type: CURRENT_NOTE,
  note
});
