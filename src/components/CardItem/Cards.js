import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import tats from '../../assets/tats.jpg'
import underground from '../../assets/Underground stage.jpg'
import rocklahoma from '../../assets/rocklahoma.jpg'

const Cards = () => {
    return (
        <div className='cards'>
            <div className="cards__container" >
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem src={underground} text='Underground Rocklahoma'  path="/events" />
                        <CardItem src={tats} text='DREK CREW' path="/about" />
                        <CardItem src={rocklahoma} text='The Shrine'  path="/events" />
                        {/* <CardItem src={} text='check us out' label='' path="/events" /> */}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
