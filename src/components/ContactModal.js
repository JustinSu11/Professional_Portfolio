import React, { useState } from 'react'
import { Button, Modal, Box, Typography, TextField, Grid } from '@mui/material'
import '@fontsource/roboto/500.css';

const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    bgcolor: 'background.paper',
    border: '1px solid #000',
    borderRadius: '5px',
    boxShadow: 24,
    p: 4,
    gap: 2,
};

const modalButtonStyle = {
    position: 'absolute',
    top: '90%',
    bgcolor: 'background.paper',
    borderRadius: '25px'
}

const buttonContainer = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}

const ContactModal = () => {
    const [modalVisibility, setModalVisibility] = useState(false)
    const handleOpen = () => setModalVisibility(true)
    const handleClose = () => setModalVisibility(false)

    return (
        <div>
            <Box sx={buttonContainer}>
                <Button onClick={handleOpen} sx={modalButtonStyle}>Get in touch</Button>
            </Box>
            <Modal open={modalVisibility} onClose={handleClose}>
                <Box sx={modalStyle} component='form'>
                    <Typography align='center' variant='h5'>
                        Let's get in touch!
                    </Typography>
                    <Typography variant='caption' component='p'>
                        Whether you're looking to collaborate or reaching out about employment, this is the place for you! Just fill out the fields below and I will get back to you.
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <TextField id='outlined-basic' label='Email' variant='outlined' />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField id='outlined-basic' label='First Name' variant='outlined' />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField id='outlined-basic' label='Last Name' variant='outlined' />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField fullWidth='true' id='outlined-multiline-flexible' multiline rows={3} maxRows={4} label='Collaboration details' variant='outlined'/>
                        </Grid>
                    </Grid>
                </Box>
            </Modal>
        </div>
    )
}

export default ContactModal