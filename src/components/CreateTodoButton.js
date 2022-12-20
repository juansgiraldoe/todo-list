import '../styles/CreateTodoButton.css'
import React from 'react'

function CreateTodoButton() {

  const onClickButton = () => {
    alert('Aqui se deberia abrir un modal')
  }

  return (
    <button
      className='CreateTodoButton'
      onClick={onClickButton}
    >
      +
    </button>
  )
}

export {CreateTodoButton}
