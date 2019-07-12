import React from 'react'
import upperCase from 'upper-case';

export default ({lettre, handleClick})=>(
    <div className='letter' onClick={handleClick}><p>{upperCase(lettre)}</p></div>
    
)