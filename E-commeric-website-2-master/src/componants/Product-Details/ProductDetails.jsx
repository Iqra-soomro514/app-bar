import { Box, Button, Grid, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import imgStar from '../../assets/Group 1660.png'
import './productdetails.css'

const ProductDetails = () => {

  const [productDetails, setProductDetails] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const param = useParams()
  console.log(productDetails);

  useEffect(() => {

    const fetchProducts = async () => {
      try {
        setIsLoading(true)
        const product = await axios.get(`https://fakestoreapi.com/products/ ${param?.product_id}`)

        if (product?.status === 200) {
          setIsLoading(false)
          setProductDetails(product?.data)
        } else {
          setIsLoading(true)
        }
      } catch (error) {
        console.log(error);

      }

    }

    fetchProducts()


  }, [])


  return (
    <Box>
      <Grid container className='my-5 container' >
        <Grid item sx={12} md={6} >
          <Box className="text-center">
            <img className="animated-image w-75 p-5" src={productDetails.image} alt="Animated Product" />
          </Box>
        </Grid>
        <Grid item sx={12} md={6} className='text-center ps-5 mt-5'>
          <Typography variant='h4' sx={{ fontSize: '44px', fontStyle: 'oblique' }} className='fw-normal text-warning my-2'> {productDetails.category}</Typography>
          <Typography variant='body1' sx={{ fontSize: '44px', fontStyle: 'oblique' }} className='fw-normal my-2'> {productDetails.title}</Typography>
          <Box className='d-flex justify-content-center align-items-center'>
            <Box>
              <img
                src={imgStar}
                className="img-fluid rounded-top"
                alt=""

              />
            </Box>

            <Typography variant='body1' sx={{ fontSize: '34px', fontStyle: 'oblique' }} className='text-black'> {productDetails.price}</Typography>
            <Box>
              <img
                src={imgStar}
                className="img-fluid rounded-top images"
                alt=""

              />
            </Box>
          </Box>
          <Box className='d-flex px-4 mt-4'>
            <Button variant='contained' fullWidth className='bg-warning py-2 mx-3 text-black'>Contact Us</Button>
            <Button variant='contained' fullWidth className='bg-black py-2'>Learn more</Button>
          </Box>
        </Grid>
      </Grid>
      <footer>
        
      </footer>
    </Box>
  )
}

export default ProductDetails