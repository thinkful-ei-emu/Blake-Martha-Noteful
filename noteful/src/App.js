import React from 'react';
import './App.css';
import Header from './components/header.js';
import Sidebar from './components/sidebar.js';
import NoteList from './components/noteList.js';
import store from './store.js';

function App() {
  return (
    <div className="App">
    <Header />
    <Sidebar />
    <NoteList />
    </div>
  );
}

export default App;
