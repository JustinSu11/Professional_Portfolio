import React from 'react'
import { Paper } from '@mui/material'
import './introBody.css'

const IntroBody = () => {
    return (
        <Paper elevation={8} className='introBody-paper'>
            <imageWrapper>
                <img src='./OIP.jpg' alt='Justin Nguyen'/>
            </imageWrapper>
        </Paper>
    )
}

export default IntroBody