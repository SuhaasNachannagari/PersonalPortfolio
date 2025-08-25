import React from 'react'
import Hero from './sections/Hero'
import ShowcaseSection from './sections/ShowcaseSection'
import NavBar from './components/NavBar'
import Experience from './sections/Experience'
import Techstack from './sections/Techstack'
import Contact from './sections/Contact'

const App = () => {
  return (
    <>
    <NavBar />
      <Hero />
      <ShowcaseSection />
      <Experience />
      <Techstack />
      <Contact />

    </>
  )
}

export default App