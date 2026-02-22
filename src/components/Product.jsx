import { Link } from "react-router-dom";
import { Card, CardMedia, CardContent, Typography, CardActions, Box } from "@mui/material";
  
  const Product = ({ product }) => {
    return (
      <Card
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          p: 2,
          '&:hover': {
            boxShadow: 6,
            transform: 'translateY(-4px)',
            transition: 'all 0.3s ease-in-out',
          },
        }}
      >
        <CardMedia
          to={`/product/${product._id}`}
          sx={{
            height: 240,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: 1,
          }}
          image={product.image}
        />
        
        <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flexGrow: 1, p: 0, pt: 1 }}>
            <Typography
              gutterBottom
              variant="h6"
              to={`/product/${product._id}`}
              sx={{
                fontWeight: 600,
                color: 'text.primary',
                textDecoration: 'none',
                '&:hover': { color: 'primary.main' },
                mb: 1,
              }}
            >
              {product.name}
            </Typography>
          </CardContent>
          
          <CardActions sx={{ p: 0, mt: 'auto' }}>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ fontWeight: 700, color: 'text.primary' }}
            >
              ${product.price}
            </Typography>
          </CardActions>
        </Box>
      </Card>
    );
  };
  
  export default Product;