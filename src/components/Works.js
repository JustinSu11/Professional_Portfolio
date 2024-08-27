import React from 'react'
import './works.css'

const Works = () => {
    return (
        <div className='works-preview'>
            <div className='image-container'>
                <img src='/Works-WeatherApp.png' alt='Justin Nguyen' />
                <div className='overlay'>
                    <div className='work-name'>Weather App</div>
                </div>
            </div>
        </div>
    )
}

export default Works