import classNames from "classnames";
import ECommerceClient from "@yaminnathernpm/ecommerce_client/dist/ecommerce_client";
import Cart from "@yaminnathernpm/ecommerce_client/dist/models/cart";
import CheckoutResponse from "@yaminnathernpm/ecommerce_client/dist/models/checkout_response";
import CheckoutToken from "@yaminnathernpm/ecommerce_client/dist/models/checkout_token";
import { NextRouter, useRouter } from "next/router";
import React from "react";
import styles from "./checkout_box_styles.module.scss";
import { openRazorpayPaymentPortal } from "../../checkout/index/payment_step/razorpay_opener.js";

export interface CheckoutBoxProps {
  cart: Cart;
  className?: string;
  style?: React.CSSProperties;
}

const CheckoutBox: React.FC<CheckoutBoxProps> = (props) => {
  const router: NextRouter = useRouter();

  function render(): JSX.Element {
    return (
      <div className={classNames(styles.checkout_box, props.className)} style={props.style}>
        <h2>Order Summary</h2>
        
        <PriceRow style={{marginTop: "32px"}} heading="Original Price" price={props.cart.original_price.formatted_with_code} />
        
        <PriceRow heading="Discount Price" price={props.cart.original_price.formatted_with_code} />

        <hr />

        <PriceRow style={{marginTop: "32px"}} heading="Total" price={props.cart.final_price.formatted_with_code} />
 
        {buildCheckoutButton()}
      </div>
    );
  }

  function buildCheckoutButton(): JSX.Element {
    async function onClickCallback(): Promise<void> {
      const eCommerceClient: ECommerceClient = new ECommerceClient();
      const checkoutToken: CheckoutToken = await eCommerceClient.checkout.createCheckoutToken();

      await router.push(`/checkout?id=${checkoutToken.id}`);
    }

    return (
      <button className={classNames(styles.add_to_cart)} onClick={onClickCallback}>
        Checkout
      </button>
    );
  }

  return render();
}

export default CheckoutBox;

const PriceRow: React.FC<{className?: string, style?: React.CSSProperties, heading: string, price: string}> = (props) => {
  return (
    <div style={{marginTop: "16px", ...props.style}} className={classNames(styles.price_row, props.className)}>
      <span className="h6">{props.heading}</span>                

      <span>{props.price}</span>
    </div>
  );
}