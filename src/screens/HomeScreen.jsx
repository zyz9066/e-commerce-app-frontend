import { Box, Grid, Typography } from '@mui/material';

import Product from '../components/Product';
import products from "../products";

const HomeScreen = () => {
  
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