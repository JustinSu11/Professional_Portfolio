import React, { useEffect } from 'react'
import './background.css'

const Background = () => {
    // useEffect(() => {
    //     const handleMouseMove = (event) => {
    //         const { clientX: x, clientY: y } = event;
    //         const bubbles = document.querySelectorAll('.bubble')

    //         bubbles.forEach((bubble) => {
    //             const movementFactor = 0.04
    //             const translateX = (x - window.innerWidth/2) * movementFactor
    //             const translateY = (y - window.innerHeight/2) * movementFactor

    //             const rotation = bubble.style.transform.match(/rotate\(([^)]+)\)/)
    //             const rotationValue = rotation ? rotation[1] : '0deg'

    //             bubble.style.transform = `translate(${translateX}px, ${translateY}px) rotate(${rotationValue})`
    //         })
    //     }

    //     document.addEventListener('mousemove',handleMouseMove)

    //     return () => {
    //         document.removeEventListener('mousemove', handleMouseMove)
    //     }
    // }, [])

    return (
        <div className='bubbles'>
            <div className='bubble'></div>
            <div className='bubble'></div>
            <div className='bubble'></div>
            <div className='bubble'></div>
            <div className='bubble'></div>
            <div className='bubble'></div>
        </div>
    )
}

export default Background