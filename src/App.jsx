import React, { useEffect, useState } from 'react'
import Navabar from './components/Navabar.JSX'
import Welcome from './components/Welcome'
import Dock from './components/Dock'
import {Draggable} from 'gsap/Draggable'
import {gsap} from 'gsap'
import Terminal from '#windows/Terminal'
import Safari from '#windows/Safari'
import Resume from '#windows/Resume'
import Text from '#windows/Text'
import Image from '#windows/Image'
import Contact from '#windows/Contact'
import Finder from '#windows/Finder'
import Home from '#components/Home'

gsap.registerPlugin(Draggable)

const App = () => {
  const [showMessage, setShowMessage] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    // Start fade-out after 5 seconds
    const timer1 = setTimeout(() => setFadeOut(true), 6000)
    // Remove element from DOM after fade-out duration (1s)
    const timer2 = setTimeout(() => setShowMessage(false), 4000)
    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [])

  return (
    <main>
      {/* Fullscreen Notification */}
      {showMessage && (
        <div
          className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 
                      bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg
                      transition-all duration-1000
                      ${fadeOut ? 'opacity-0 -translate-y-4' : 'opacity-100 translate-y-0'}`}
        >
          For the best experience, view in full screen!
        </div>
      )}

      <Navabar />
      <Welcome />
      <Dock />
      <Terminal />
      <Safari />
      <Resume/>
      <Text />
      <Image />
      <Contact />
      <Finder/>
      <Home />
    </main>
  )
}

export default App
