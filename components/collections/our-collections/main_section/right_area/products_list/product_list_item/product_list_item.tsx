import classNames from "classnames";
import React from "react";
// import Product from "../../../../../../product/product";
import ProductImage from "../../../../../../product/product_image/product_image";
import styles from "./product_list_item.module.scss";
import Star from "@mui/icons-material/Star";
import StarOutline from "@mui/icons-material/StarOutline";
import Link from "next/link";
import { Product } from "@chec/commerce.js/types/product";

export interface ProductListItemProps {
  product: Product;
}

const ProductListItem: React.FC<ProductListItemProps> = (props) => {
  function render(): JSX.Element {
    return (
      <div className={classNames(styles.product_list_item)}>
        <ProductImage product={props.product} className={classNames(styles.image)} />

        <div className={classNames(styles.text_area)}>
          <Link href="/"><a className={classNames(styles.heading)}>{props.product.name}</a></Link>

          <p className={classNames(styles.stars)}>
            <Star />
            
            <Star />
            
            <Star />
            
            <Star />
            
            <StarOutline />
          </p>
          
          <p className={classNames("h6")}>
            ${props.product.price.formatted_with_code}
            
            {/* &nbsp; */}

            {/* <span className={classNames(styles.actual_price)}>${props.product.price.formatted_with_code}</span> */}
          </p>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Voluptatem minus ab sed tenetur tempora illum ut itaque natus? Id, quos.
          </p>
        </div>        
      </div>
    );
  }

  return render();
}


export default ProductListItem;