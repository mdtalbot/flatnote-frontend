import merge from 'lodash/merge';
import {
  RECEIVE_NOTE,
  RECEIVE_ALL_NOTES,
  CREATE_NOTE,
  UPDATE_NOTE,
  DELETE_NOTE,
  CURRENT_NOTE
} from '../actions/actions_notes';

let _nullState = {
  currentNote: null,
  allNotes: {}
};

const NotesReducer = (state = _nullState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  let keys = null;

  switch (action.type) {
    case RECEIVE_ALL_NOTES:
      newState.allNotes = action.notes;
      keys = Object.keys(newState.allNotes);
      newState.currentNote = newState.allNotes[keys[0]];
      return newState;

    case RECEIVE_NOTE:
      newState.currentNote = action.note;
      return newState;

    case UPDATE_NOTE:
      newState.allNotes[action.note.id] = action.note;
      return newState;

    case CREATE_NOTE:
      newState.allNotes[action.newNote.id] = action.newNote;
      newState.currentNote = action.newNote;
      return newState;

    case DELETE_NOTE:
      delete newState.allNotes[action.deletedNote.id];
      keys = Object.keys(newState.allNotes);
      newState.currentNote = newState.allNotes[keys[0]];
      return newState;

    case CURRENT_NOTE:
      newState.currentNote = action.note;
      return newState;

    default:
      return state;
  }
}

export default NotesReducer;
