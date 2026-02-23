import { Link, useParams } from "react-router-dom";

import { Box, Button, Chip, Divider, IconButton, Paper, Typography } from "@mui/material";

import { ArrowBack } from "@mui/icons-material";

import RatingComponent from "../components/Rating";

import products from "../products";

const ProductScreen = () => {
    const { id: productId } = useParams();
    const product = products.find((p) => p._id === productId);

    return (
        <Box sx={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: 3, 
            alignItems: { xs: 'flex-start', md: 'stretch' } 
        }}>
            <IconButton
                component={Link}
                to='/'
                size="large"
                aria-label="notifications"
                color="inherit"
            >
                <ArrowBack />
            </IconButton>

            <Box sx={{ flex: { xs: '100%', md: '40%' }, minWidth: 300, order: { xs: 1, md: 1 } }}>
                <Box
                    component="img"
                    src={product.image}
                    alt={product.name}
                    sx={{
                        width: '100%',
                        height: 400,
                        objectFit: 'cover',
                        borderRadius: 2,
                        boxShadow: 3,
                    }}
                />
            </Box>

            <Box sx={{ flex: { xs: '100%', md: '35%' }, minWidth: 250, order: { xs: 2, md: 2 } }}>
                <Paper elevation={0} sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <Typography variant="h4" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
                        {product.name}
                    </Typography>
                    
                    <RatingComponent
                        value={product.rating}
                        text={`${product.numReviews} reviews`}
                        color="#f8e825"
                    />
                    
                    <Typography variant="h5" sx={{ mt: 1, fontWeight: 700, color: 'primary.main' }}>
                        ${product.price}
                    </Typography>
                    
                    <Divider sx={{ my: 2 }} />
                    
                    <Typography variant="body1" color="text.secondary" sx={{ flexGrow: 1 }}>
                        {product.description}
                    </Typography>
                </Paper>
            </Box>

            <Box sx={{ flex: { xs: '100%', md: '25%' }, minWidth: 250, order: { xs: 3, md: 3 } }}>
                <Paper elevation={1} sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <Box sx={{ mb: 2 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                        <Typography variant="body2">Price:</Typography>
                        <Typography variant="h6" fontWeight={700}>${product.price}</Typography>
                        </Box>
                        
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography variant="body2">Status:</Typography>
                        <Chip 
                            label={product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                            color={product.countInStock > 0 ? 'success' : 'error'}
                            size="small"
                        />
                        </Box>
                    </Box>

                    <Button
                        variant="contained"
                        fullWidth
                        size="large"
                        disabled={product.countInStock === 0}
                        sx={{ mt: 'auto' }}
                    >
                        Add To Cart
                    </Button>
                </Paper>
            </Box>
        </Box>
    );
}

export default ProductScreen;