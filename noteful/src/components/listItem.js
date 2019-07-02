import React from 'react';
import moment from 'moment'

function ListItem (props) {
  let date = moment(props.modified).format('Do MMM, YYYY');
  return (
    <div>
      <h1>{props.name}</h1>
      <p>Date modified on {date}</p>
      <button>Delete Note</button>
    </div>
  )
}

export default ListItem