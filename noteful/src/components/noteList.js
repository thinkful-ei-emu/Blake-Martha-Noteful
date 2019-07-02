import React from 'react';
import ListItem from './listItem.js' 


function NoteList(props) {
  const listItems = props.notes
  .filter(note => props.match.params.selectedId === note.folderId)
  .map((item) => 
    <li key={item.id}>
      <ListItem name={item.name} modified={item.modified}/>
    </li>
  );
  return (
    <ul>
      {listItems}
      <button>Add Note</button>
    </ul>
  )
}

export default NoteList