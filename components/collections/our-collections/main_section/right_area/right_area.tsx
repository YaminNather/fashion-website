import classNames from "classnames";
import React from "react";
import styles from "./right_area.module.scss";
import FilterBar from "./filter_bar/filter_bar";
import ProductsList from "./products_list/products_list";
import ToPageBar from "./to_page_bar/to_page_bar";
// import { Product } from "@chec/commerce.js/types/product";
import Product from "ecommerce_client/dist/models/product";

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

export interface RightAreaProps {
  products: Product[];
}

const RightArea: React.FC<RightAreaProps> = (props) => {
  function render(): JSX.Element {
    return (
      <div className={classNames(styles.right_area)}>
        <FilterBar />

        <ProductsList products={props.products} />

        <ToPageBar currentPage={1} />
      </div>
    );
  }

  return render();
}


export default RightArea;