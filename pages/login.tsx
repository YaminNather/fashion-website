import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import FooterSection from '../components/home/footer_section/footer_section';
import NavBar from '../components/nav_bar/nav_bar';
import styles from "../styles/login.module.scss";
import getCommerce from '../commercejs/commercejs';

// interface Props {
//   products: Product[];
// }

const LoginPage: NextPage = () => {
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
            
      <div className={styles.login_page}>
        <NavBar />
        
        <main className="container">
          <p className={styles.heading}>Login</p>

          <input placeholder="Email Address" onChange={(e) => setEmail(e.target.value)} value={email} />
          
          <input placeholder="password" onChange={(e) => setPassword(e.target.value)} value={password} />

          <button 
            onClick={async (e) => {
              try {
                const loginResponse = await getCommerce().customer.login(email, "localhost:3000/login/callback");
                if(loginResponse.success)
                  console.log(`Logged in successfully`);
                  else 
                  console.log(`Log in failed`);

              }
              catch(e) {
                console.log(`CustomLog: Login error: ${JSON.stringify(e, null, 2)}`);
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