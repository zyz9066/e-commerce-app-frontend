import { Link } from "react-router-dom";

import { Card, CardMedia, Typography, CardActions, Box } from "@mui/material";

import RatingComponent from "./Rating";
  
const Product = ({ product }) => {
  return (
    <Card sx={{
      height: '100%',  // Fills Grid item
      display: 'flex',
      flexDirection: 'column',
      p: 1.5,  // Reduced from 2
      boxSizing: 'border-box',
      borderRadius: 1,
      '&:hover': {
        boxShadow: 4,
        transform: 'translateY(-2px)',
      },
    }}>
      <CardMedia
        component="div"
        sx={{
          height: 200,
          position: 'relative',
          borderRadius: 0.75,
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${product.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          },
        }}
      >
        <Link
          to={`/product/${product._id}`}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1,
            cursor: 'pointer',
          }}
        />
      </CardMedia>
      
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', pt: 1 }}>
      <Typography
        component={Link}
        to={`/product/${product._id}`}
        variant="subtitle1"
        title={product.name}
        sx={{
          fontWeight: 600,
          color: 'text.primary',
          textDecoration: 'none',
          '&:hover': { color: 'primary.main' },
          mb: 1,
          height: 24,
          width: 140,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          maxWidth: '100%',
        }}
      >
        {product.name}
      </Typography>
        
        <RatingComponent
          value={product.rating}
          text={`${product.numReviews} reviews`}
          color="#f8e825"
        />
        
        <CardActions sx={{ p: 0, mt: 'auto' }}>
          <Typography
            variant="h5"
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