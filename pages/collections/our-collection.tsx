import { Product } from "@chec/commerce.js/types/product";
import classNames from "classnames";
import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import React from "react";
import getCommerce from "../../commercejs/commercejs";
import Banner from "../../components/collections/our-collections/banner/banner";
import FilterBar from "../../components/collections/our-collections/main_section/right_area/filter_bar/filter_bar";
import RightArea from "../../components/collections/our-collections/main_section/right_area/right_area";
import SideArea from "../../components/collections/our-collections/main_section/side_area/side_area";
import FooterSection from "../../components/home/footer_section/footer_section";
import NavBar from "../../components/nav_bar/nav_bar";
import styles from "../../styles/collections/our_collection.module.scss";

interface Props {
  products: Product[];
}

const OurCollectionsPage: NextPage<Props> = (props) => {
  function render(): JSX.Element {
    return (
      <>
        <Head>
          <title>Our Collection</title>
        </Head>

        <NavBar />

        <Banner />

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

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const products: Product[] = (await getCommerce().products.list()).data;

  return {
    props: {
      products: products
    }
  };
};