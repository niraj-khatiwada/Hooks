import React from 'react'
import './App.css'
import shopem from './shopem.png'
import image from './scene.jpg'

function App() {
  const imageRef = React.useRef(null)
  return (
    <img
      src={image}
      onMouseOver={() => {
        return (imageRef.current.src = shopem)
      }}
      onMouseOut={() => {
        return (imageRef.current.src = image)
      }}
      ref={imageRef}
    />
  )
}

export default App
