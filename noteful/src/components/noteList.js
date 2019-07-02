import React from 'react';
import ListItem from './listItem.js' 


function NoteList(props) {
  const listItems = props.notes().map((item, index) => 
    <li key={index}><ListItem name={item.name} modified={item.modified}/></li>
  );
  return (
    <ul>
      {listItems}
      <button>Add Note</button>
    </ul>
  )
}

export default NoteList