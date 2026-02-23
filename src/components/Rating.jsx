import { Rating, Typography, Box } from "@mui/material";
import { Star, StarBorder} from "@mui/icons-material";

const RatingComponent = ({ value, text, color = "#f8e825" }) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      <Rating
        readOnly
        value={value}
        precision={0.5}
        icon={<Star sx={{ color }} fontSize="small" />}
        emptyIcon={<StarBorder sx={{ color: 'inherit' }} fontSize="small" />}
      />
      {text && (
        <Typography variant="body2" color="text.secondary">
          {text}
        </Typography>
      )}
    </Box>
  );
};

export default RatingComponent;