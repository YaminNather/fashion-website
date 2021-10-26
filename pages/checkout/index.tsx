import React, { useState } from "react";
import { NextPage } from "next";
import Head from "next/head";
import { NextRouter, useRouter } from "next/router";
import FooterSection from "../../components/home/footer_section/footer_section";
import classNames from "classnames";
import styles from "../../styles/checkout/index.module.scss";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import CheckoutDetailsBox from "../../components/checkout/index/checkout_details_box/checkout_details_box";
import ShippingDetailsStep from "../../components/checkout/index/shipping_details_step/shipping_details_step";
import CheckoutPageState, { checkoutPageContext } from "../../components/checkout/index/checkout_page_state";
import PaymentStep from "../../components/checkout/index/payment_step/payment_step";

const CheckoutPage: NextPage = (props) => {
  // const checkoutToken: CheckoutToken | null = useCheckoutToken();
  const pageState: CheckoutPageState = useCheckoutPageState();

  React.useEffect(
    () => {
      const scriptTag: HTMLScriptElement = document.createElement("script");
      scriptTag.src = "https://checkout.razorpay.com/v1/checkout.js";
      document.body.appendChild(scriptTag);
    },
    []
  );

  function render(): JSX.Element {  
    if(pageState.checkoutToken == null) {
      return (
        <div style={{display: "flex", width: "100vw", height: "100vh", justifyContent: "center", alignItems: "center"}}>        
          Loading...
        </div>
      );
    }  
  
    return (
      <>
        <Head>
          <title>Checkout</title>
        </Head>
        
        <checkoutPageContext.Provider value={pageState}>
          <div className={classNames(styles.checkout_page)}>
            <section id="main_section" className={classNames(styles.main_section)}>
              <div className={classNames(styles.left_area)}>
                <Stepper activeStep={pageState.step}>
                  <Step>
                    <StepLabel>Shipping Details</StepLabel>
                  </Step>
  
                  <Step>
                    <StepLabel>Payment</StepLabel>
                  </Step>
                </Stepper>
  
                {buildStep()}
              </div>
  
              <CheckoutDetailsBox cart={pageState.checkoutToken.cart} />
            </section>
  
            <FooterSection />
          </div>
        </checkoutPageContext.Provider>
      </>
    );
  }

  function buildStep(): JSX.Element {
    console.log(`CustomLog: Building Step ${pageState.step}`);
    
    if(pageState.step == 0)
      return <ShippingDetailsStep />;
    else if(pageState.step == 1)
      return <PaymentStep />;
    else
      return <ShippingDetailsStep />;
  }

  return render();
};

export default CheckoutPage;

function useCheckoutPageState(): CheckoutPageState {
  const [pageVersionIndex, setPageVersionIndex] = React.useState<number>(0);
  const [pageState] = React.useState<CheckoutPageState>(new CheckoutPageState());
  const router: NextRouter = useRouter();

  React.useEffect(
    () => {
      function onPageStateUpdatedCallback(): void {
        console.log(`CustomLog: Page state updated`);
        setPageVersionIndex(pageVersionIndex + 1);
      }

      pageState.addListener(onPageStateUpdatedCallback);
      
      return () => pageState.removeListener(onPageStateUpdatedCallback);
    }
  );

  React.useEffect(
    () => {      
      const checkoutId: string = router.query.id as string;
      console.log(`CustomLog: checkoutid = ${checkoutId}`);

      pageState.getCheckoutTokenFromBackend(checkoutId);
    },
    []
  );

  return pageState;
}