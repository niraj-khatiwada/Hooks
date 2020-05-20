import React from 'react'
import ScaleOnMouseOver from './App'
import img from './scene.jpg'

export default function image() {
  return (
    <div>
      <ScaleOnMouseOver src={img} />
    </div>
  )
}
