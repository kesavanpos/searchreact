import React from 'react'

// Add custom styles for ul
const ulsuggestion = {
}

// Suggestions component when the props as results 
// handleclick event is used click on selected item

const Suggestions = ({ results, handleClick }) => {
  const options = results.map(r => (
    <li onClick={handleClick} key={r.city_id}>
      <span>
        {r.unique_name}
      </span>
    </li>
  ))
  return <ul style={ulsuggestion}>{options}</ul>
}

export default Suggestions