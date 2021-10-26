import classNames from "classnames";
import React from "react";
import Carousel from "../../carousel/carousel";
// import Product from "../../product/product";
import ProductCard from "../product_card/product_card";
import styles from "../../../styles/components/home/products_list/products_list.module.scss";
// import Product from "../../../commerce_client/inventory/product";
import Product from "ecommerce_client/dist/models/product";

export interface ProductListProps {
  products: Product[];
  className?: string;
  style?: React.CSSProperties;
}

const ProductsList: React.FC<ProductListProps> = (props) => {
  const render = () => {
    return (
      <Carousel className={classNames(styles.products_list, props.className)} slidesPerView={4} spaceBetween={32} style={props.style}>
        {props.products.map(
          (element, index) => (
            <ProductCard key={index} product={element} />
          )
        )}

        {/* <div style={{width: "100%", height: "100px", backgroundColor: "red"}}></div>

        <div style={{width: "100%", height: "100px", backgroundColor: "green"}}></div>
        
        <div style={{width: "100%", height: "100px", backgroundColor: "blue"}}></div> */}
      </Carousel>
    );
  };

  return render();
};

export default ProductsList;