import React from 'react'
import '../../App.css'
import rocklahoma from '../../assets/rocklahoma.jpg'
import underground from '../../assets/Underground stage.jpg'



const Events = () => {
    return (
     <div className="events-container">
         <div className='event-images'>
           <a href='http://www.tulsashrine.com/' target='_blank' rel="noreferrer">
             <img src={rocklahoma} alt=''/>
           </a>
           <a href='https://rocklahoma.com/info#venue' target='_blank' rel="noreferrer">
             <img className='underground' src={underground} alt=''/>
           </a> 
         </div>
     </div>
    )
}

export default Events
