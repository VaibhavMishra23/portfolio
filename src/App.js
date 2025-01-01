import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Profiles from './components/Profiles'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
function App() {
  const [theme,setTheme] = useState('light');
  return (
    <>
    <div style={{backgroundColor: theme=='light'?'white':'#042743'}}>
    <Navbar theme={theme} setTheme={setTheme}/>
    <Profiles theme={theme} setTheme={setTheme}/>
    <About theme={theme} setTheme={setTheme}/>
    <Projects theme={theme} setTheme={setTheme}/>
    <Contact theme={theme}/>
    </div>
    </>
  )
}

export default App
