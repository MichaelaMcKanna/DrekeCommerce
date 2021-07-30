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
              <Link
                class='social-icon-link-facebook'
                to='https://www.facebook.com/drekkc/'
                target='_blank'>
                <img className='icon' src={facebook} alt='' />
              </Link>
              <Link
                class='social-icon-link-reverb'
                to='https://www.reverbnation.com/dreknation?fbclid=IwAR0KaaXnp206iTnoJf9fFUO1v9yT_uvu1jng_cCPaWaVelf0hEqCAWyeLpU'
                target='_blank'>
                <img className='icon' src={reverb} alt='' />
              </Link>
              <Link
                class='social-icon-link-youtube'
                to='https://www.youtube.com/user/dreknation'
                target='_blank'>
                <img className='icon' src={youtube} alt='' /> 
              </Link>
              <Link
                class='social-icon-link-twitter'
                to='/https://twitter.com/dreknation'
                target='_blank'>
                <img className='icon'src={twitter} alt='' /> 
              </Link>
              <Link
                class='social-icon-link-spotify'
                to='https://open.spotify.com/artist/3rSMpL3kvOQUvMP5qzTWA9'
                target='_blank'>
                <img className='icon'src={spotify} alt='' /> 
              </Link>
              <Link
                class='social-icon-link-apple'
                to='https://music.apple.com/us/album/happens/1568083673?fbclid=IwAR0yDWt1NVaLh046lnVhh8rR2lxuRQvBEGiwlGt8-3_e07VZd4UlTnYm7_w'
                target='_blank'>
                <img className='icon'src={apple} alt='' /> 
              </Link>
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
