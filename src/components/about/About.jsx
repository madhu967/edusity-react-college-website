import React from 'react'
import './about.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
     <>
     <div className="about">
        <div className="about-left">
            <img src={about_img} alt="" className='about-img' />
            <img src={play_icon} alt="" className='play-icon' onClick={()=>{
               setPlayState(true)
            }} />
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
            <p>Lorem ipsum, dolor sit aelit. , impedit quos eos, ducimus dolor, autem quis aliquam sequi consequatur facere earum exercitationem
               .</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum quaerat debitis molestias dolor? Possimus, temporibus corrupti animi rerum ipsam iste iusto molestias vel, nihi
               </p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim reprehenderit corporis deleniti ab doloribus esse nemo magni quos, quas saepe ullam officiis perspiciatis ut
                  minima.</p>
        </div>
     </div>
     </>
  )
}

export default About