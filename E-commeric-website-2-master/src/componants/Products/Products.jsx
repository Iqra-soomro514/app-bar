import React, { useEffect, useState } from 'react'
import { Box, Card, CircularProgress, Divider, Grid, LinearProgress, Tooltip, Typography } from '@mui/material'
import axios from 'axios'
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import './product.css'
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addtoCart } from '../../slice/add-cart/addCartslice';

const Products = () => {

    const [product, setProduct] = useState([])
    const [categoryOption, setcategoryOption] = useState([])
    const [categoryMap, setCategoryMap] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [categoryfilter, setCategoryFilter,] = useState({});
    const navigate = useNavigate();
    const dispatch = useDispatch()
    useEffect((CategoryFilter) => {

        const fetchProducts = async () => {
            try {
                setIsLoading(true)
                const product = await axios.get('https://fakestoreapi.com/products')

                if (product?.status === 200) {
                    setIsLoading(false)
                    setProduct(product?.data)
                    setCategoryMap(product?.data)

                    const flterData = product?.data.map((productItem) => {
                        return {
                            label: productItem?.category,
                            value: productItem?.category,
                        }
                    })

                    const uniqueCategory = flterData.filter((item, index, self) => index === self.findIndex((t) => t.value === item.value))
                    console.log(uniqueCategory, "uniqueCategory");
                    setcategoryOption(uniqueCategory);
                } else {

                    setIsLoading(true)
                }
            } catch (error) {
                console.log(error);

            }

        }

        fetchProducts()


    }, [])
    useEffect(() => { 
        let filteredProducts = categoryMap.filter((product) => product?.category === categoryfilter?.value);

        setProduct(filteredProducts)}, 
        [categoryfilter]);
    
    return (
        <Box className='container-fluid mt-4'>
            <Autocomplete
                disablePortal
                options={categoryOption}
                sx={{ width: 300 }}
                onChange={(e, newValue) => {
                    setCategoryFilter(newValue)

                }}
                renderInput={(params) => <TextField {...params} label="category" />}
            />
            {isLoading ? <Box className='text-center mt-5 pt-5'><CircularProgress color="info" /></Box> : <Grid container spacing={7} >
                {product?.map((item, index) => {

                    return (
                        <Grid item xs={12} md={4} lg={3} key={index} className='my-3'>

                            <Box className="text-center border-2 border-warning bg-light card" sx={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                                <Box className="text-center py-2" >
                                    <img className="w-25 img-fluid animated-image" style={{ minHeight: '140px', maxHeight: '140px' }} src={item.image} alt={item.title} />
                                </Box>
                                <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "space-between", height: "250px" }}>
                                    <Typography variant="body2" className="text-center py-1">{item.category}</Typography>
                                    <Typography variant="body2">{item.title}</Typography>
                                    <Typography variant="body2">{item.price}</Typography>
                                    <Divider className='border-info' />
                                    <Box className="d-flex justify-content-around py-3 text-white bg-warning">
                                        <Tooltip title='View Details' arrow>
                                            <RemoveRedEyeIcon className="icon" onClick={() => {
                                                navigate(`/product-details/${item?.id}`)
                                                console.log(item)
                                            }
                                            } />
                                        </Tooltip>
                                        <Tooltip title='Add to Favorite' arrow>
                                            <FavoriteIcon className="icon" />
                                        </Tooltip>
                                        <Tooltip title='Add to cart' arrow>
                                            <AddShoppingCartIcon  className="icon"onClick={()=>dispatch(addtoCart())} />
                                        </Tooltip>

                                    </Box>
                                </Box>
                            </Box>

                        </Grid>


                    )


                })}
            </Grid>}
        </Box >
    )
}

export default Products