import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/drek-icon.png'
import reverb from '../../assets/resources/red-star.jfif'
import facebook from '../../assets/resources/facebook-neon.jpg'
import spotify from '../../assets/resources/neon-spotify.jfif'
import apple from '../../assets/resources/download apple.jfif'
import twitter from '../../assets/resources/twitter-neon.jpg'
import youtube from '../../assets/resources/youtube-neon.jpg'


const Footer = () => {
    return (
        <div className='footer-container'>
        <section class='social-media'>
          <div class='social-media-wrap'>
            <div class='footer-logo'>
              <Link to='/home' className='social-logo'>
                DREK
                <img src={logo} alt="" height="40px" />
              </Link>
            </div>
           
            <div class='social-icons'>
              <a
                class='social-icon-link-facebook'
                href='https://www.facebook.com/drekkc/'
                target='_blank' rel="noreferrer">
                <img className='icon' src={facebook} alt='' />
              </a>
              <a
                class='social-icon-link-reverb'
                href='https://www.reverbnation.com/dreknation?fbclid=IwAR0KaaXnp206iTnoJf9fFUO1v9yT_uvu1jng_cCPaWaVelf0hEqCAWyeLpU'
                target='_blank' rel="noreferrer">
                <img className='icon' src={reverb} alt='' />
              </a>
              <a
                class='social-icon-link-youtube'
                href='https://www.youtube.com/user/dreknation'
                target='_blank' rel="noreferrer">
                <img className='icon' src={youtube} alt='' /> 
              </a>
              <a
                class='social-icon-link-twitter'
              href='/https://twitter.com/dreknation'
                target='_blank'>
                <img className='icon'src={twitter} alt='' /> 
              </a>
              <a
                class='social-icon-link-spotify'
                href='https://open.spotify.com/artist/3rSMpL3kvOQUvMP5qzTWA9'
                target='_blank' rel="noreferrer">
                <img className='icon'src={spotify} alt='' /> 
              </a>
              <a
                class='social-icon-link-apple'
                href='https://music.apple.com/us/album/happens/1568083673?fbclid=IwAR0yDWt1NVaLh046lnVhh8rR2lxuRQvBEGiwlGt8-3_e07VZd4UlTnYm7_w'
                target='_blank' rel="noreferrer">
                <img className='icon'src={apple} alt='' /> 
              </a>
            </div>
            <div className='rights'>
                <small class='website-rights'>DREK © 2021</small>
            </div>
          </div>
        </section>
      </div>
    )
}

export default Footer
