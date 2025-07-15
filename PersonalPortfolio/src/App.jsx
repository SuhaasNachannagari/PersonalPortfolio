import React from 'react'
import Hero from './sections/hero'
import ShowcaseSection from './sections/ShowcaseSection'
import NavBar from './components/NavBar'
import Experience from './sections/Experience'
import Techstack from './sections/Techstack'

const App = () => {
  return (
    <>
    <NavBar />
      <Hero />
      <ShowcaseSection />
      <Experience />
      <Techstack />
    </>
  )
}

export default App