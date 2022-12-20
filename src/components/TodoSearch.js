import React from 'react'
import '../styles/TodoSearch.css'

function TodoSearch() {

  const [searchValue, setSearchValue] = React.useState('')
  const onTyping = (e) => {
    console.log(e.target.value)
    setSearchValue(e.target.value)
  }

  return [
    <input
      className='TodoSearch'
      placeholder="¿Tienes pendientes?"
      onChange={onTyping}
    />,
    <p>{searchValue}</p>
  ]
}

export {TodoSearch}
