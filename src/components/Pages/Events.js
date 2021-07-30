import React from 'react'
import '../../App.css'
import rocklahoma from '../../assets/rocklahoma.jpg'
import underground from '../../assets/Underground stage.jpg'



const Events = () => {
    return (
     <div className="events-container">
         <div className='event-images'>
           <a href='http://www.tulsashrine.com/'>
             <img src={rocklahoma}/>
           </a>
           <a href='https://rocklahoma.com/info#venue'>
             <img src={underground}/>
           </a> 
         </div>
     </div>
    )
}

export default Events
