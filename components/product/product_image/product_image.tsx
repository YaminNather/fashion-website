import BarChartOutlined from "@mui/icons-material/BarChartOutlined";
import FavoriteBorderOutlined from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";
import { Button, createTheme, Theme, ThemeProvider, Typography } from "@mui/material";
import classNames from "classnames";
import React from "react";
// import Product from "../product";
import styles from "./product_image.module.scss";
import Link from "next/link";
import { Product } from "@chec/commerce.js/types/product";

export interface ProductImageProps {
  className?: string;
  style?: React.CSSProperties;
  product: Product;
}

const ProductImage: React.FC<ProductImageProps> = (props) => {
  const [hovering, setHovering] = React.useState<boolean>(false);

  const theme: Theme = createTheme({
    components: {
      MuiSvgIcon: {
        defaultProps: {
          fontSize: "small"
        }
      },
      MuiButton: {
        styleOverrides: {          
          contained: {
            borderRadius: "0px",            
            minWidth: "0px",
            width: "40px",
            height: "40px",
            marginBottom: "8px",
            backgroundColor: "white",
            color: "black",
            "&:hover": {
              backgroundColor: "black",
              color: "white",
            }
          }
        }
      }
    }
  });

  function render(): JSX.Element {
    return (
      <Link href={`/products/${props.product.id}`}>
        <div 
          className={classNames(styles.product_image, props.className)}
          style={props.style}
          onMouseEnter={(e) => setHovering(true)}
          onMouseLeave={(e) => setHovering(false)}
        >
          <div className={classNames(styles.image_viewport)}>
            <img src={props.product.media.source} />
          </div>

          <ThemeProvider theme={theme}>
            <div className={classNames(styles.buttons_area)} style={{transform: `translateX(${(hovering) ? 0 : 32}px)`, opacity: (hovering) ? 1 : 0}}>
              <Button variant="contained">
                <ShoppingCartOutlined />
              </Button>
              
              <Button variant="contained">
                <FavoriteBorderOutlined />
              </Button>
              
              <Button variant="contained">
                <BarChartOutlined />
              </Button>
            </div>
          </ThemeProvider>

          <div className={classNames(styles.discount_container)}  style={{transform: `scale(${(hovering) ? 1 : 0})`}}>
            <Typography color="black">20% off</Typography>
          </div>
        </div>
      </Link>
    );
  }

  return render();
}


export default ProductImage;