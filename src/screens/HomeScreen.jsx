import { useEffect, useState } from 'react';

import axios from 'axios';

import { Box, Grid, Typography } from '@mui/material';

import Product from '../components/Product';


const HomeScreen = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const { data } = await axios.get('https://ecommerceappbackend-fapo--5000--d7bdb599.local-credentialless.webcontainer.io/api/products');
            setProducts(data);
        };

        fetchProducts();
    }, []);
  
    return (
        <>
            <Typography variant="h4" component="h1" gutterBottom sx={{ mb: 4 }}>
                Latest Products
            </Typography>
            <Grid 
                container 
                spacing={2}
                sx={{ 
                    px: { xs: 0.5, sm: 1, md: 1.5 }, 
                    width: '100%'
                }}
                >
                {products.map((product) => (
                    <Grid item xs={12} sm={6} md={4} lg={4} xl={3} key={product._id}>
                    <Product product={product} />
                    </Grid>
                ))}
            </Grid>
        </>
    );
};

export default HomeScreen;