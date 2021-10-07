import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import React from 'react';
import Head from 'next/head';
import { ThemeProvider } from '@mui/system';
import { createTheme, Theme } from '@mui/material/styles';
import "swiper/css";

const theme: Theme = createTheme({
  palette: {
    primary: { main: "rgb(0, 0, 0)" }
  },
  typography: {
    h2: {
      fontFamily: "Josefin Sans",
      fontSize: "34px",
      fontWeight: "bold"
    },
    h6: {
      fontFamily: "Josefin Sans",
      fontWeight: "bold"
    },
    body1: {
      fontSize: "13px",
      color: "rgb(153, 153, 153)",
      textDecorationColor: "rgba(0, 0, 0, 0.2)",
      // lineHeight: "24px"
    },
    fontFamily: "Poppins"
  },
  components: {    
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "0px"
        }
      },           
      defaultProps: {
        color: "primary",        
      }
    },
    MuiTab: {
      styleOverrides: {
        root: {
          fontSize: "14px"
        }
      }
    }
  }  
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;600;700;900&display=swap" rel="stylesheet" />
        
        <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" rel="stylesheet" />

        <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet" />
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
