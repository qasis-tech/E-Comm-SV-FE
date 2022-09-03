import React from 'react'

const Button = (props) => {
  return (
    <button className="btn btn-success" type="submit" onClick={props.handleClick}>
                     {props.label}
                    </button>
  )
}

export default Button