import React from 'react'
import './hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
const Hero = () => {
  return (
    <>
    <div className="hero conatiner" id='hero'>
        <div className="hero-txt">
            <h1>We Ensure better education for a better world</h1>
            <p>Our cutting-edge curriculum is designed to enpower students
                with the knowledge,skills,and experiences needed to excel in the 
                dynamic field of education
            </p>
            <button className="btn">Explore more <img src={dark_arrow} alt="" /></button>
        </div>
    </div>
    </>
  )
}

export default Hero