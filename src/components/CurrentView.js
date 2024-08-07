import React from 'react'
import Home from './Home'
import Works from './Works'

const CurrentView = ({ view }) => {
    switch (view) {
        case 'Home':
            return <Home />
        case 'Works':
            return <Works />
        default:
            return <Home />
    }
}

export default CurrentView