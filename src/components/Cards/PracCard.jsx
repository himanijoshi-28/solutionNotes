import React from 'react'
import './praccard.css'
const PracCard = (props) => {
  return (
    <div className='card'>
        <p className='card-text'>{props.subject}</p>
    </div>
  )
}

export default PracCard