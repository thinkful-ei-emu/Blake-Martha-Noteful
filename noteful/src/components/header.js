import React from 'react';
import { Link } from 'react-router-dom';

function Header () {
  return (
    <h1>
      <Link to='/'>Noteful</Link></h1>
  )
}

export default Header