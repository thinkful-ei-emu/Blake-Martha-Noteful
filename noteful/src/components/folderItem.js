import React from 'react';
import './folderitem.css'
function FolderItem (props) {
  return (
    <div onClick={e => {
      e.preventDefault();
      props.selectID(props.id);
      }} >
      <h3 className={props.selectedId && props.selectedId === props.id ? 'highlighted' : 'nonHighlighted'}>
        {props.name}
      </h3>
    </div>
  )
} 

export default FolderItem