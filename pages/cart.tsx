import Cart from "ecommerce_client/dist/models/cart";
import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import Banner from "../components/banner/banner";
import CartItemsTable from "../components/cart/cart_items_table/cart_items_table";
import CheckoutBox from "../components/cart/checkout_box/checkout_box";
import FooterSection from "../components/home/footer_section/footer_section";
import NavBar from "../components/nav_bar/nav_bar";
import ECommerceClient from "ecommerce_client/dist/ecommerce_client";
import styles from "../styles/cart.module.scss";
import classNames from "classnames";

const CartPage: NextPage = (props) => {
  const [cart, setCart] = React.useState<Cart | null>(null);

  React.useEffect(
    () => {      
      async function asyncPart(): Promise<void> {
        const client: ECommerceClient = new ECommerceClient();    
        const cartFromAPI: Cart = await client.carts.get();
        // console.log(`CustomLog: Cart: ${JSON.stringify(cartFromAPI, null, 2)}`);
        setCart(cartFromAPI);        
      }

      asyncPart();
    },
    []
  );
  
  function render(): JSX.Element {
    if(cart == null)
      return <h1>Loading...</h1>;    

    return (
      <>
        <Head>
          <title>Cart</title>
        </Head>

        <div className={classNames(styles.cart)}>
          <NavBar />

          <Banner>SHOPPING CART</Banner>          
          
          {buildMainSection()}

          <FooterSection />
        </div>
      </>
    );
  }

  function buildMainSection(): JSX.Element {
    if(cart == null)
      throw new Error("Cannot build main section if cart is null");
    
    if(cart.items.length == 0) {
      return (
        <div style={{display: "flex", width: "100%", height: "50vh", justifyContent: "center", alignItems: "center"}}>
          <h2>Cart is empty!!</h2>
        </div>
      );
    }

    return (
      <section id="main_section" className={classNames("container", styles.main_section)}>
        <CartItemsTable cart={cart} />            

        <CheckoutBox cart={cart} />
      </section>
    );
  }

  return render();
};

export default CartPage;