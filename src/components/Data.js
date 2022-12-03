import React from 'react'

export default function Data(props) {
  return (
    <div className='Data'>
      <h2>{props.title}</h2>
      <div>{props.content}</div>
    </div>
  )
}
