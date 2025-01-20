import React from 'react'
import  ErrorImg  from '../../assets/404-removebg-preview.png'
import { Button, Grid, Typography } from '@mui/material'
const ErrorPage = () => {
    return (
        <div className=' pt-5 bg-info' style={{height:'100vh'}}>
            <Grid container>
            <Grid item xs={12} sm={12} md={12} className='text-center my-5 text-white'>
                    <Typography variant="h3" className='py-3'>Something’s wrong here...</Typography>
                    <Typography variant="body2" className='py-1'>We can’t find the page you’re looking for.</Typography>
                    <Typography variant="body2" className='pb-4'> Check out our help center or head back to home.</Typography>
                    <Button variant='contained' className='mx-3'>Help center</Button>
                    <Button variant='contained'>back to home</Button>
                </Grid>
                <Grid item xs={12} sm={12} md={12} className='text-center'>
                    <img style={{width:'800px'}} src={ErrorImg} alt="" />
                </Grid>
               
            </Grid>
        </div>
    )
}

export default ErrorPage