import React from 'react'
import '../../App.css'
import tats from '../../assets/tats.jpg'
import bandmember1 from '../../assets/band-member1.jpg'
import bandmember2 from '../../assets/band-member2.jpg'
import bandmember3 from '../../assets/band-member4.jpg'

const About = () => {
    return (
        <div className='about-container'>
         <div className="about" >
            <div className="text">
                <p>You can count on the vocals of Scott Barnett on his Shure Super 55 mic to get the crowd jumping. Jon "Mother Fucking" Carter brings a certain style of guitar licks unmatched in KC. Tyler Miller on drums keeps the music moving with energy that they didn't have before. Drek has proved to be one band that will continue to put on a great show and bring strong live performances leaving new and current fans wanting more! Some people may tag Drek as a party band, but don’t take that lightly. Party is what they are all about, but music is what they make and deliver. They bring straight up talent to the industry of Party Hard Rock. 12 years in the business of making music will tell the tale. They continue to make their way thru the saturated music industry with a name that sticks in your mind, “Drek Nation” is the chant when they are urged to play one more, but count on them to play at least two. </p>
            </div> 
        </div>
        <div className="images">
                <div className="column"><img src={tats} alt=''/> </div>
                <div className="column"><img src={bandmember1} alt=''/></div>
                <div className="column"><img src={bandmember3} alt=''/></div> 
                <div className="column"><img src={bandmember2} alt=''/></div>
                  
        </div>
        </div>
       
    )}

export default About
