import React from 'react'

export default function page() {
  return (
    <div>
        <p>TO START ANALYSIS</p>

        
        <form 
        className='demographics__input'
        action="">
          <p>CLICK TO TYPE</p>
          <input 
            className='demographics__input--text'
            type="text" 
            placeholder='Introduce Yourself'
            name='name'
          />
        </form>
    </div>
 )
}
