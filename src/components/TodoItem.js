import '../styles/TodoItem.css'
import React from 'react'

function TodoItem(props) {

  const onComplete = () => {
    alert(' ✅ Completaste: ' + props.text)
  }
  const onDelete = () => {
    alert('⚠️ Eliminaste: ' + props.text)
  }

  return (
    <li className="TodoItem">
      <span
      onClick={onComplete}
      className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}>
        √
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span onClick={onDelete} className="Icon Icon-delete">
        X
      </span>
    </li>
  )
}

export {TodoItem}
