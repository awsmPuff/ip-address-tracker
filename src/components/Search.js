import React from 'react'

export default function Search(props) {
  return (
    <form className='Search' onSubmit={props.submit}>
        <input 
          type='search' 
          value={props.value} 
          autoComplete='off'
          onChange={props.change}
          placeholder='Search for any IP address' />
        <button type='submit'><img src={props.submitBtn} alt='submit' /></button>
    </form>
  )
}
