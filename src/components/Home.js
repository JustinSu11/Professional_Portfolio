import React from 'react'
import './home.css'
import { styled } from '@mui/system'
import { Typography } from '@mui/material'

const StyledTypography = styled(Typography)(({ theme }) => ({
    color: '#3a4750',
    fontFamily: 'monospace',
    '& .red-text': {
        color: '#e84a5f',
        fontSize: '350%',
        lineHeight: 1,
        fontWeight: 700,
        display: 'block',
        paddingLeft: '12%',
    },
    '& .green-text': {
        color: '#e79e85',
        fontSize: '350%',
        lineHeight: 1,
        fontWeight: 700,
    },
    '& .grey-text': {
        fontSize: '150%',
    },
    '& .name': {
        fontSize: '600%',
        fontWeight: 800,
        lineHeight: 1,
    }
}))

const Home = () => {
    return (
        <div className='introBody'>
            <StyledTypography>
                <span className='name grow'>Justin Nguyen</span>
                <span className='red-text grow'>Front End Developer</span>
                <span className='grey-text'> & </span>
                <span className='green-text grow'>Software Engineer</span>
            </StyledTypography>
        </div>
    )
}

export default Home