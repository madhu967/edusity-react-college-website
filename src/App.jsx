
import { useState } from 'react'
import './App.css'
import About from './components/about/About'
import Campus from './components/campus/Campus'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Hero from './components/herosection/Hero'
import Navbar from './components/navbar/Navbar'
import Program from './components/programs/Program'
import Testmonial from './components/testimonials/Testmonial'
import Title from './components/title/Title'
import Videoplayer from './components/videoplayer/Videoplayer'

function App() {
  
  const [playState,setPlayState]=useState(false);

  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <div className="container">
        <Title subTitle='Our Program' title='What We Offer'></Title>
      <Program></Program>
      <About setPlayState={setPlayState}></About>
      <Title subTitle='Gallery' title='Capus Photos'></Title>
      <Campus></Campus>
      <Title subTitle='Testimonials' title='What Student Says'></Title>
      <Testmonial></Testmonial>
      <Title subTitle='Contact Us' title='Get in Touch'></Title>
      <Contact></Contact>
      <Footer></Footer>
      </div>
      <Videoplayer playState={playState} setPlayState={setPlayState}></Videoplayer>
    </>
  )
}

export default App
