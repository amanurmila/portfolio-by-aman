import React from 'react'
import './Hero.css'
import profile from '../../assets/aman.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile} alt="" />
      <h1><span>I'm MD. Amanullah,</span> Frontend Web Developer</h1>
      <p>I am a Frontend Web Developer belonging from Khulna, Bangladesh. I am too much good at the site of Development. I am also very well at UI/UX designing.</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  )
}

export default Hero
