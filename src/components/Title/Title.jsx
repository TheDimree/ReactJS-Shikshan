import React from 'react'
import './Title.css'
export default function Title({subTitle, title}) {  //* Props destructuring
  return (
    <div className='title'>
      <p>{subTitle}</p>
      <h2>{title}</h2>
    </div>
  )
}
