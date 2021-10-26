import React from "react";
import styles from "../../../styles/components/home/product_card/product_card.module.scss";
import classNames from "classnames";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ProductImage from "../../product/product_image/product_image";
import Product from "ecommerce_client/dist/models/product";
// import Product from "../../../commerce_client/inventory/product";

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
            {props.product.original_price.formatted_with_code}
          </Typography>
          
          &nbsp;&nbsp;&nbsp;
          
          {/* <Typography
            component="span" fontSize="18px" 
            fontWeight="bold" marginTop="8px" style={{textDecoration: "line-through"}}
          >
            $60.00            
          </Typography> */}
        </Box>
        
        <Typography>{props.product.product_name}</Typography>   
      </div>      
    );
  };  


  return render();
};

export default ProductCard;