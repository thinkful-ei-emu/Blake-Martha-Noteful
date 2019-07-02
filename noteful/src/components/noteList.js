import React from 'react';
import ListItem from './listItem.js' 


function NoteList(props) {
  const listItems = props.notes
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