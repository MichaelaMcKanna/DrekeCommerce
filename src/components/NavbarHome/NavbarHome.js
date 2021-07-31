import React, {useState, useEffect} from 'react'
import logo from '../../assets/drek-icon.png'
//import useStyles from './styles'
import { HomeButtons } from '../HomeButtons/HomeButtons'
import './NavBarHome.css'
import { Toolbar, IconButton, Badge, Typography } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'
import { grey } from '@material-ui/core/colors';
import {Link, useLocation} from 'react-router-dom'

import useStyles from './styles'



const NavbarHome = ({totalItems}) => {
    const classes = useStyles()
    const location = useLocation()

    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false)
        }else{
            setButton(true)
        }
    }

    useEffect(()=>{
        showButton()
    },[])

    window.addEventListener('resize', showButton)

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">Drek
                     <img src={logo} alt="" height="40px" 
                    />
                    </Link>
                    <div className='menu-icon' onClick={handleClick} style={{paddingTop: '8px'}} >
                    <i className={click ? 'fas fa-times': 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'} >
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu} >Home</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/merch' className='nav-links' onClick={closeMobileMenu}>Merch</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/about' className='nav-links' onClick={closeMobileMenu}>About</Link>
                        </li>
                        <li>
                            <Link to='/events' className='nav-links-mobile'onClick={closeMobileMenu}>Events</Link>
                        </li>
                        
                    </ul>
                    {button && <HomeButtons buttonStyle='btn--outline'>Events</HomeButtons>}
                </div>
                <>
                <div className={classes.grow}/>
                    {location.pathname === '/merch' && (
                        <div className={classes.button}>
                        <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                            <Badge badgeContent={totalItems} color="secondary">
                                <ShoppingCart style={{ color: grey[500] }}/>
                            </Badge>
                        </IconButton>
                    </div>
                    )}   
                </>
            </nav> 
        </>
    )
}

export default NavbarHome
