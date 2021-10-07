import React from 'react';
import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import MainCarousel from '../components/home/main_carousel/main_carousel';
import ServicesSection from '../components/home/services_section/services_section';
import Divider from '@mui/material/Divider';
import CategoriesSection from '../components/home/categories_section/categories_section';
import TopProductsSection from '../components/home/top_products_section/top_products_section';
import FashionWeekSection from '../components/home/fashion_week_section/fashion_week_section';
import SpecialProductsSection from '../components/home/special_products_section/special_products_section';
import ReviewsSection from '../components/home/reviews_section/reviews_section';
import ClientsSection from '../components/home/clients_section/clients_section';
import FooterSection from '../components/home/footer_section/footer_section';
import NavBar from '../components/nav_bar/nav_bar';
import Commerce from '@chec/commerce.js';
import getCommerce from '../commercejs/commercejs';
import { ProductCollection } from '@chec/commerce.js/features/products';
import { Product } from '@chec/commerce.js/types/product';

interface Props {
  products: Product[];
}

const Home: NextPage<Props> = (props) => {

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
            
      <NavBar />

      <MainCarousel />

      <ServicesSection />

      <Divider />

      <CategoriesSection />

      <TopProductsSection products={props.products} />

      <FashionWeekSection />

      <SpecialProductsSection products={props.products} />

      <ReviewsSection />

      <ClientsSection />

      <FooterSection />
    </>
  )
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const commerce: Commerce = getCommerce();
  const productCollection: ProductCollection =  await commerce.products.list();  

  const props: Props = {
    products: productCollection.data
  };

  return {
    props: props
  };
};