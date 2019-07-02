import React from 'react';
import FolderItem from './folderItem.js';

function Sidebar (props) {

  const sidebarList = props.folders.map((item, index) => 
    <li key={index}>
      <FolderItem 
        selectedId={props.selectedId} 
        name={item.name} 
        id={item.id} 
        index={index} 
        selectID={props.selectID}
      />
    </li>
  );

  console.log('selectedId in sidebar', props.selectedId);

  return (
    <div>
    <ul>
      {sidebarList}
    </ul>
    <button>Add Folder</button>
    </div>
  )
}

export default Sidebar