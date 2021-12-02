import classNames from "classnames";
import ECommerceClient from "@yaminnathernpm/ecommerce_client/dist/ecommerce_client";
import Product from "@yaminnathernpm/ecommerce_client/dist/models/product";
import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import React from "react";
import Banner from "../../components/banner/banner";
import RightArea from "../../components/collections/our-collections/main_section/right_area/right_area";
import SideArea from "../../components/collections/our-collections/main_section/side_area/side_area";
import FooterSection from "../../components/home/footer_section/footer_section";
import NavBar from "../../components/nav_bar/nav_bar";
import getECommerceClient from "../../ecommerce_client/ecommerce_client";
import styles from "../../styles/collections/our_collection.module.scss";

interface ServerSideProps {
  products: string;
}

interface Props {
  products: Product[];
}

const OurCollectionsPage: NextPage<ServerSideProps> = (serverSideProps) => {
  const props: Props = {
    products: JSON.parse(serverSideProps.products)
  };

  function render(): JSX.Element {
    return (
      <>
        <Head>
          <title>Our Collection</title>
        </Head>

        <NavBar />

        <Banner>OUR COLLECTION</Banner>

        <section id='main_section' className={classNames("container", styles.main_section)}>
          <SideArea />

          <div style={{width: "40px"}}></div>          

          <RightArea products={props.products} />
        </section>

        <FooterSection />
      </>
    );
  }

  return render();
};

export default OurCollectionsPage;

export const getServerSideProps: GetServerSideProps<ServerSideProps> = async (context) => {
  const client: ECommerceClient = getECommerceClient();
  
  let categories: string[] | undefined = undefined;
  if(typeof context.query["categories"] == "string")
    categories = [context.query["categories"]];
  else if(Array.isArray(context.query["categories"]))
    categories = context.query["categories"];

  console.log(`CustomLog: Queries: ${JSON.stringify(context.query, null, 2)}`);

  const products: Product[] = await client.inventory.getAllProducts({categories: categories});

  return {
    props: {
      products: JSON.stringify(products, null, 2)
    }
  };
};