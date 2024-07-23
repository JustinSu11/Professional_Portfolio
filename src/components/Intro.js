import React from 'react'
import Header from './Header'
import LightBackground from './LightBackground'
import IntroBody from './IntroBody'
import './intro.css'

const Intro = () => {
    return (
        <div className='intro-container'>
            <LightBackground />
            <Header />
            <IntroBody />
        </div>
    )
}

export default Intro