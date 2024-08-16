import './App.css'
import { Header } from './components/Header'
import { MainContent } from './components/MainContent'
import { Nav } from './components/Nav'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'

function App() {

  return (
    <>
      <Header />
      <Nav />
      <Hero />
      <MainContent />
      <Footer />
    </>
  )
}

export default App
