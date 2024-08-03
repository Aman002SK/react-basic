import React from 'react'
import './card.css'
const Card = (props) => {
  return (
    
    <div className='cards'>
        
        <div className='product'>
            <img src={props.image}></img>
            <p>{props.title}</p>
            <p>{props.price}</p>
        </div>
       
       
       
        
    </div>
  )
}

export default Card