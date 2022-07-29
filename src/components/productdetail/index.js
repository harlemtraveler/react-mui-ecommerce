import {
  Dialog,
  DialogTitle,
  Slide,
  Box,
  IconButton,
  DialogContent,
  Typography,
  Button,
  Stack,
} from "@mui/material";
import { useRef } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Colors } from "../../styles/theme";
import { styled } from "@mui/material/styles";
import { ProductAddToCart, Product, ProductImage } from "../../styles/product";
import { BannerShopButton } from "../../styles/banner";
import IncDec from "../ui/incdec";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

function SlideTransition(props) {
  return <Slide direction="down" {...props} />;
}

const ProductDetailWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  padding: theme.spacing(4),
}));

const ProductDetailInfoWrapper = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: 500,
  lineHeight: 1.5,
}));

export default function ProductDetail({ open, onClose, product }) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Dialog>
      {/* Title */}
      <DialogTitle sx={{ background: Colors.secondary }}>
        {/* todo: temp value */}
        <Box display="flex" alignItems="center" justifyItems="space-between">
          Product title
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>

      {/* Content */}
      <DialogContent>
        <ProductDetailWrapper display="flex" flexDirection={matches ? "column" : "row"}>
          <Product sx={{ mr: 4 }}>
            <ProductImage src={product.image} />
          </Product>

          <ProductDetailInfoWrapper>
            {/* todo: temp value */}
            <Typography variant="subtitle">SKU: 123</Typography>
            {/* todo: temp value */}
            <Typography variant="subtitle">Availability: 5 in stock</Typography>
            <Typography sx={{ lineHeight: 2 }} variant="h4">
              {product.name}
            </Typography>
            {/* todo: temp value within "product.description" val ...i.e. lorem ipsum */}
            <Typography variant="body">
              {product.description}
              {product.description}
              {product.description}
            </Typography>
            {/* Add to Cart Button */}
            <Box>
              {/* todo: create the "IncDec" component */}
              {/*<IncDec />*/}
              <Button variant="contained">Add to Cart</Button>
            </Box>
            {/* Favorite Icon */}
            <Box
              display="flex"
              alignItems="center"
              sx={{ mt: 4, color: Colors.light }}
            >
              <FavoriteIcon sx={{ mr: 2 }} />
              Add to Wishlist
            </Box>
            {/* Social Media Icons */}
            <Box
              sx={{ mt: 4, color: Colors.dove_gray }}
            >
              <FacebookIcon />
              <TwitterIcon sx={{ pl: 2 }} />
              <InstagramIcon sx={{ pl: 2 }} />
            </Box>
          </ProductDetailInfoWrapper>
        </ProductDetailWrapper>
      </DialogContent>
    </Dialog>
  );
}