import React from 'react'
import './header.css'

const Header = ({ setView }) => {
    const handleClick = (newView) => {
        setView(newView)
    }

    return (
        <div id='navbar'>
            <a href='#contact' onClick={() => handleClick('Contact')}>Contact</a>
            <a href='#works' onClick={() => handleClick('Works')}>Works</a>
            <a href='#home' onClick={() => handleClick('Home')}>Home</a>
        </div>
    )

}

export default Header