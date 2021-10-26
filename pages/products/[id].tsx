import BookmarkAddOutlined from "@mui/icons-material/BookmarkAddOutlined";
import Star from "@mui/icons-material/Star";
import StarOutline from "@mui/icons-material/StarOutline";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import classNames from "classnames";
import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import React from "react";
import FooterSection from "../../components/home/footer_section/footer_section";
import NavBar from "../../components/nav_bar/nav_bar";
import ItemDetailSelect, { ItemDetailOption } from "../../components/products/[id]/item_detail_select/item_detail_select";
import styles from "../../styles/products/[id].module.scss";
import Link from "next/link";
import Product from "ecommerce_client/dist/models/product";
import ECommerceClient from "ecommerce_client/dist/ecommerce_client";
import Cart from "ecommerce_client/dist/models/cart";

interface ServerSideProps {
  product: string;
}

interface Props {
  product: Product;
}



const ProductPage: NextPage<ServerSideProps> = (serverSideProps) => {
  const props: Props = {
    product: JSON.parse(serverSideProps.product)
  };
  
  const [loading, setLoading] = React.useState<boolean>(false);
  const [loggedIn, setLoggedIn] = React.useState<boolean>(false);
  React.useEffect(
    () => {
      const eCommerceClient: ECommerceClient = new ECommerceClient();
      setLoggedIn(eCommerceClient.authentication.isLoggedIn());
    },
    []
  );

  const [quantity, setQuantity] = React.useState<number>(1);
  
  function render(): JSX.Element {
    if(loading)
      return <h1>Loading...</h1>;

    return (
      <>
        <Head>
          <title>Product</title>
        </Head>
  
        <NavBar />
  
        <main className={classNames("container", styles.main_section)}>
          <Grid container={true} spacing={4}>
            <Grid item={true} md={6}>
              {/* <img src="https://cdn.shopify.com/s/files/1/0041/9525/4381/products/3_4d00d666-2e6d-41eb-93b3-e056004b1cf9_1024x1024@2x.jpg" /> */}
              <img src={props.product.images[0]} />
            </Grid>
            
            <Grid item={true} md={6} className={classNames(styles.right_area)}>
              <div className={classNames(styles.heading)}>
                <span className={classNames("h6", styles.name)}>{props.product.product_name}</span>
              
                <Link href="/"><a><BookmarkAddOutlined className={classNames(styles.wishlist)} /></a></Link>
              </div>
              
              <p className={classNames(styles.vendor)}>Fedora Ltd.</p>
  
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Dolores iure omnis vel! Accusamus aliquid provident quam illo ipsa nostrum, 
                similique dignissimos libero sequi suscipit quae fugiat et sint dicta. Cum!
              </p>
  
              <h6 className={classNames("price")}>
                {props.product.original_price.formatted_with_code}
                {/* $40.00&nbsp;&nbsp; */}
  
                {/* <span className={classNames("actual_price")}>$60.00</span> */}
              </h6>
              
              <p>
                {[...Array(3)].map( (value, index) => <Star key={index} className={classNames("rating")} /> )}
  
                <StarOutline className={classNames("rating")} />
              </p>
              
              <Divider />
  
              <ItemDetailSelect<string> label="Size" style={{marginTop: "16px"}}>
                <option value="s">s</option>
                
                <option value="m">m</option>
                
                <option value="l">l</option>
              </ItemDetailSelect>
              
              <ItemDetailSelect<string> label="Color" style={{marginTop: "16px"}}>
                <option value="s">s</option>
                
                <option value="m">m</option>
                
                <option value="l">l</option>
              </ItemDetailSelect>
              
              <ItemDetailSelect<number> 
                label="Quantity" style={{marginTop: "16px"}} disabled={!loggedIn} value={quantity}
                onChange={(value) => {
                  console.log(`CustomLog: Selected Quantity = ${value}`);
                  setQuantity(value);
                }}
              >
                {[...Array(5)].map(
                  (value, index) => <ItemDetailOption<number> key={index} value={index + 1}>{index + 1}</ItemDetailOption>
                )}
              </ItemDetailSelect>

              {buildAddToCartButton()}
            </Grid>
          </Grid>
        </main>      
  
        <FooterSection />
      </>
    );
  }

  function buildAddToCartButton(): JSX.Element {
    async function onClickCallback(): Promise<void> {
      const eCommerceClient: ECommerceClient = new ECommerceClient();
      
      console.log(`CustomLog: Modifying product ${props.product.id} in cart with quantity ${quantity}`);

      setLoading(true);
      const cart: Cart = await eCommerceClient.carts.modify(props.product.id, quantity);
      setLoading(false);
      console.log(`CustomLog: Cart: ${JSON.stringify(cart, null, 2)}`);
    }

    return <button style={{marginTop: "16px"}} disabled={!loggedIn} onClick={onClickCallback}>ADD TO CART</button>;
  }

  return render();
};

export default ProductPage;

export const getServerSideProps: GetServerSideProps<ServerSideProps> = async (context) => {
  const client: ECommerceClient = new ECommerceClient();

  const product: Product = await client.inventory.getProduct(context.params!.id as string);

  return {
    props: {
      product: JSON.stringify(product, null, 2)
    }
  };
};