import React, { useState } from 'react'
import Background from './Background'
import Header from './Header'
import CurrentView from './CurrentView'
import ContactModal from './ContactModal'
import './mainLayout.css'

const MainLayout = () => {
    const [view, setView] = useState('Home')

    return (
        <div className='intro-container'>
            <Background />
            <Header setView={setView} />
            <CurrentView view={view} />
            <ContactModal />
        </div>
    )
}

export default MainLayout