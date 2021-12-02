// import { Product } from "@chec/commerce.js/types/product";
import Product from "@yaminnathernpm/ecommerce_client/dist/models/product";
import React from "react";
import ProductListItem from "./product_list_item/product_list_item";

export interface ProductsListProps {
  products: Product[];
}

const ProductsList: React.FC<ProductsListProps> = (props) => {
  function render(): JSX.Element {
    return (
      <>
        {props.products.map( (value, index) => <ProductListItem key={index} product={value} /> )}
      </>
    );
  }

  return render();
}


export default ProductsList;