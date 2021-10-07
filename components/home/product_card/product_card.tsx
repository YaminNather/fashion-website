import React from "react";
// import Product from "../../product/product";
import styles from "../../../styles/components/home/product_card/product_card.module.scss";
import classNames from "classnames";
import Button from "@mui/material/Button";
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";
import { createTheme, Theme, ThemeProvider } from "@mui/material/styles";
import FavoriteBorderOutlined from "@mui/icons-material/FavoriteBorderOutlined";
import BarChartOutlined from "@mui/icons-material/BarChartOutlined";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ProductImage from "../../product/product_image/product_image";
import { Product } from "@chec/commerce.js/types/product";

export interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = (props) => {
  const render = () => {
    return (    
      <div className={classNames(styles.product_card)}>        
        <ProductImage product={props.product} />

        <Box marginTop="8px">
          <Typography 
            component="span" fontSize="18px" 
            fontWeight="bold" color="black" 
            marginTop="8px"
          >
            {props.product.price.formatted_with_code}
          </Typography>
          
          &nbsp;&nbsp;&nbsp;
          
          {/* <Typography
            component="span" fontSize="18px" 
            fontWeight="bold" marginTop="8px" style={{textDecoration: "line-through"}}
          >
            $60.00            
          </Typography> */}
        </Box>
        
        <Typography>{props.product.name}</Typography>   
      </div>      
    );
  };  


  return render();
};

export default ProductCard;