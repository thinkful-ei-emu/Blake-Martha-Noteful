import React from 'react';

function FolderItem (props) {
  return (
    <div onClick={e => {
      e.preventDefault();
      console.log(props.id);
      props.selectID(props.id);
      }} >
      <h3 >
        {props.name}
      </h3>
    </div>
  )
} 

export default FolderItem