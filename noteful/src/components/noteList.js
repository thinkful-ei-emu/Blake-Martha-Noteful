import React from 'react';
import ListItem from './listItem.js' 
import store from '../store.js';

function NoteList() {
  const noteList = store.notes.map(note=> 
    )

  return (
    <ul>
      <ListItem />
      <button>Add Note</button>
    </ul>
  )
}

export default NoteList