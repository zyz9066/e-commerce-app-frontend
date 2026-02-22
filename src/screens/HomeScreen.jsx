import { Box, Grid, Typography } from '@mui/material';

import Product from '../components/Product';
import products from "../products";

const HomeScreen = () => {
  
    return (
        <>
            <Typography variant="h4" component="h1" gutterBottom sx={{ mb: 4 }}>
                Latest Products
            </Typography>
            <Box sx={{ width: '100%' }}>
            <Grid container spacing={3}>
                {products.map((product) => (
                <Grid item key={product._id} xs={12} sm={6} md={4} xl={3}>
                    <Product product={product}/>
                </Grid>
                ))}
            </Grid>
            </Box>
        </>
    );
};

export default HomeScreen;