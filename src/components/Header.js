import React from 'react'
import { AppBar, Toolbar, Typography, Container } from '@mui/material'
import { styled } from '@mui/system'
import './header.css'

const StyledTypography = styled(Typography)(({ theme }) => ({
    color: 'black',
    fontFamily: 'monospace',
    '& .initial': {
        fontSize: '150%',
        lineHeight: 1,
        fontWieght: 700,
    }
}))

const Header = () => {

    return (
        <AppBar className='header-appbar'>
            <Container maxWidth='xl'>
                <Toolbar disableGutters>
                    <StyledTypography variant='h4'>
                        <span className='initial'>J</span>ustin <span className='initial'>N</span>guyen
                    </StyledTypography>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header