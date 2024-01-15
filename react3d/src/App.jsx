import { useEffect, useState } from 'react'
import { render } from './render3d'
function App() {
  useEffect(() => {
    render()
  }, [])

  return (
    <>
    <div></div>
    </>
  )
}

export default App
