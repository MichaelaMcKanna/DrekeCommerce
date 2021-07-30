import React from 'react'
import '../../App.css'
import { HomeButtons } from '../HomeButtons/HomeButtons'
import './HeroSection.css'
import video from '../../assets/drek-vid.mp4'


const HeroSection = () => {
    return (
        <div className='hero-container' >
            <video src={video} autoPlay loop muted />
            <h1>This is Drek</h1>
            <div className="hero-btns" >
            
                <HomeButtons className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>SHOWS</HomeButtons>
            </div>
        </div>
    )
}

export default HeroSection
