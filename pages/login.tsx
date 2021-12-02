import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import FooterSection from '../components/home/footer_section/footer_section';
import NavBar from '../components/nav_bar/nav_bar';
import styles from "../styles/login.module.scss";
import Router from "next/router";
import { AuthenticationResponse } from '@yaminnathernpm/ecommerce_client/dist/authentication/authentication';
import ECommerceClient from '@yaminnathernpm/ecommerce_client/dist/ecommerce_client';

// interface Props {
//   products: Product[];
// }

const LoginPage: NextPage = () => {
  const [email, setEmail] = React.useState<string>("test_user1@gmail.com");
  const [password, setPassword] = React.useState<string>("test_password");

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
            
      <div className={styles.login_page}>
        <NavBar />
        
        <main className="container">
          <p className={styles.heading}>Login</p>

          <input placeholder="Email Address" defaultValue={email} onChange={(e) => setEmail(e.target.value)} value={email} />
          
          <input placeholder="password" defaultValue={password} onChange={(e) => setPassword(e.target.value)} value={password} />

          <button 
            onClick={async (e) => {
              const commerceClient: ECommerceClient = new ECommerceClient();
              
              try {
                const response: AuthenticationResponse = await commerceClient.authentication.login(email, password);
                console.log(`Logged in successfully`);

                sessionStorage.setItem("token", JSON.stringify(response.token, null, 2));
                
                await Router.push(`/`);
              }
              catch(e) {
                console.log(`CustomLog: Login error: ${(e as Error).message}`);                
              }
            }}
          >
            Login
          </button>
        </main>

        <FooterSection />
      </div>
    </>
  )
};

export default LoginPage;

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const commerce: Commerce = getCommerce();
//   const productCollection: ProductCollection =  await commerce.products.list();  

//   const props: Props = {
//     products: productCollection.data
//   };

//   return {
//     props: props
//   };
// };