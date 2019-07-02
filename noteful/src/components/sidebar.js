import React from 'react';
import FolderItem from './folderItem.js';
import store from '../store.js';

function Sidebar () {
  const sidebarList = store.folders.map((item, index) => 
    <li key={index}><FolderItem name={item.name} id={item.id} index={index} /></li>
  );

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