import classNames from "classnames";
import Cart, { CartItem } from "@yaminnathernpm/ecommerce_client/dist/models/cart";
import React from "react";
import styles from "./checkout_details_box.module.scss";

export interface CheckoutDetailsBoxProps {
  cart: Cart;
} 

const CheckoutDetailsBox: React.FC<CheckoutDetailsBoxProps> = (props) => {  
  function render(): JSX.Element {
    return (
      <div className={styles.checkout_details_box}>
        {props.cart.items.map((cartItem, index) => buildCartItem(cartItem))}

        <hr />

        {buildTotalArea()}                
      </div>
    );
  }

  function buildCartItem(cartItem: CartItem) {
    return (
      <div className={styles.cart_item}>
        <div className={styles.left_area}>
          <img src={cartItem.product.images[0]} />

          <div className={classNames(styles.text_area)}>
            <div className={styles.product_name}>{cartItem.product.product_name}</div>
            
            {cartItem.product.brand}
          </div>
        </div>

        <span className={classNames(styles.price)}>{cartItem.final_price.formatted_with_symbol}</span>
      </div>
    );
  }

  function buildTotalArea() {
    return (
      <div className={classNames(styles.total_area)}>          
        <span className={classNames(styles.heading)}>Total</span>

        <span className={"h6"}>{props.cart.final_price.formatted_with_symbol}</span>
      </div>
    );
  }

  return render();
}


export default CheckoutDetailsBox;