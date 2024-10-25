import React from 'react'

const Button = ({func, btnTitle}) => {
  return (
    <div>
        <button onClick={func}>{btnTitle}</button>
    </div>
  )
}

export default Button