import React from 'react'
import Navabar from './components/Navabar.JSX'
import Welcome from './components/Welcome'
import Dock from './components/Dock'

const App = () => {
  return (
    <main>
      <Navabar />
      <Welcome />
      <Dock />
    </main>
  )
}

export default App