import React from 'react'

function Button({name,location}) {
  return (
    <a href={location} >
      <div className='bg-purple'>
      {name}
      this is a button
    </div>
      </a>
  )
}

export default Button
