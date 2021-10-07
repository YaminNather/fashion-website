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
import ItemDetailSelect from "../../components/products/[id]/item_detail_select/item_detail_select";
import styles from "../../styles/products/[id].module.scss";
import Link from "next/link";
import getCommerce from "../../commercejs/commercejs";
import { Product } from "@chec/commerce.js/types/product";

interface Props {
  product: Product;
}

const ProductPage: NextPage<Props> = (props) => {
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
            <img src={props.product.media.source} />
          </Grid>
          
          <Grid item={true} md={6} className={classNames(styles.right_area)}>
            <div className={classNames(styles.heading)}>
              <span className={classNames("h6", styles.name)}>{props.product.name}</span>
            
              <Link href="/"><a><BookmarkAddOutlined className={classNames(styles.wishlist)} /></a></Link>
            </div>
            
            <p className={classNames(styles.vendor)}>Fedora Ltd.</p>

            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
              Dolores iure omnis vel! Accusamus aliquid provident quam illo ipsa nostrum, 
              similique dignissimos libero sequi suscipit quae fugiat et sint dicta. Cum!
            </p>

            <h6 className={classNames("price")}>
              {props.product.price.formatted_with_code}
              {/* $40.00&nbsp;&nbsp; */}

              {/* <span className={classNames("actual_price")}>$60.00</span> */}
            </h6>
            
            <p>
              {[...Array(3)].map( () => <Star className={classNames("rating")} /> )}

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
            
            <ItemDetailSelect<string> label="Quantity" style={{marginTop: "16px"}}>
              {[...Array(5)].map(
                (value, index) => <option value={index + 1}>{index + 1}</option>
              )}
            </ItemDetailSelect>

            <button style={{marginTop: "16px"}}>ADD TO CART</button>
          </Grid>
        </Grid>
      </main>      

      <FooterSection />
    </>
  );
};

export default ProductPage;

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const product: Product = await getCommerce().products.retrieve(context.params!.id as string);

  return {
    props: {
      product: product
    }
  };
};