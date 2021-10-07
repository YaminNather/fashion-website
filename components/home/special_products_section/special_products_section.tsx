import Typography from "@mui/material/Typography";
import React from "react";
// import Product from "../../product/product";
import ProductsList from "../products_list/products_list";
import styles from "../../../styles/components/home/special_products_section/special_products_section.module.scss";
import classNames from "classnames";
import { Product } from "@chec/commerce.js/types/product";

// const products: Product[] = [
//   { 
//     name: "Aenean Digissim",
//     imageSrc: "//cdn.shopify.com/s/files/1/0041/9525/4381/products/03_8fb195d2-04e8-4b74-863b-2eb73ea6ea70_2048x.jpg",
//     price: 40.0,
//     discount: {
//       discount: 10,
//       type: "percentage",
//       formattedString: "10%"
//     },
//     discountedPrice: 4    
//   },
//   { 
//     name: "Dignissim Ligula",
//     imageSrc: "//cdn.shopify.com/s/files/1/0041/9525/4381/products/020_2048x.jpg",
//     price: 40.0,
//     discount: {
//       discount: 10,
//       type: "percentage",
//       formattedString: "10%"
//     },
//     discountedPrice: 4    
//   },
//   { 
//     name: "Dignissim Ligula",
//     imageSrc: "//cdn.shopify.com/s/files/1/0041/9525/4381/products/018_1728x.jpg",
//     price: 40.0,
//     discount: {
//       discount: 10,
//       type: "percentage",
//       formattedString: "10%"
//     },
//     discountedPrice: 4    
//   },
//   { 
//     name: "Dignissim Ligula",
//     imageSrc: "//cdn.shopify.com/s/files/1/0041/9525/4381/products/017_2048x.jpg",
//     price: 40.0,
//     discount: {
//       discount: 10,
//       type: "percentage",
//       formattedString: "10%"
//     },
//     discountedPrice: 4    
//   }
// ];

export interface SpecialProductsSectionProps {
  products: Product[];
}

const SpecialProductsSection: React.FC<SpecialProductsSectionProps> = (props) => {
  const render = () => {
    return (
      <section id="special_products_section" className={classNames("container", styles.special_products_section)}>
        <Typography variant="h2">Special Products</Typography>
       
        <Typography className={classNames(styles.description)}>
          There are many variations of passages of Lorem Ipsum available, 
           but the majority have suffered alteration in some form..
        </Typography>

        <ProductsList products={props.products} style={{marginTop: "32px"}} />
      </section>
    );
  };
  
  return render();
};

export default SpecialProductsSection;