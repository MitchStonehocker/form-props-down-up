// src/components/Greeting.jsx

import React from 'react'

export default function Greeting (props) {
  console.log('props in Greeting ===>', props)
  return (
    <div>
      <h2>Hello {props.userName}!</h2>
      <p>
        It's {props.date} at {props.time}.
      </p>
    </div>
  )
}
