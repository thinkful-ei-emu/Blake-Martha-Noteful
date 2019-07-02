import React from 'react';
//import FolderItem from './folderItem.js';
import { NavLink } from 'react-router-dom';
import './sidebar.css';

function Sidebar (props) {

  const sidebarList = props.folders.map((item) => 
    <li key={item.id}>
    <NavLink to={`/folder/${item.id}`}>
        {item.name} 
      </NavLink>
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