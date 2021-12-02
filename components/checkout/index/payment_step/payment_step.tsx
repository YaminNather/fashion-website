import react from "react";
import styles from "./payment_step_styles.module.scss";
import classNames from "classnames";
import CheckoutPageState, { addressToString, checkoutPageContext, PaymentMethodOptions } from "../checkout_page_state";
import FormControlLabel from "@mui/material/FormControlLabel";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import RazorpayPayment from  "@yaminnathernpm/ecommerce_client/dist/checkout/razorpay_payment";
import ECommerceClient from "@yaminnathernpm/ecommerce_client/dist/ecommerce_client";
import router from "next/router";
import Order from "@yaminnathernpm/ecommerce_client/dist/models/order";

// type PaymentOptions = "OnDelivery" | "Online";

const PaymentStep: React.FC = (props) => {
  const checkoutPageState: CheckoutPageState = react.useContext<CheckoutPageState>(checkoutPageContext);

  function render(): JSX.Element {
    console.log(`CustomLog: Building payment step`);

    return (
      <div className={classNames(styles.payment_step)}>
        <h6>Payment Option</h6>

        <RadioGroup defaultValue="on_delivery" onChange={(_, value) => checkoutPageState.paymentMethod = value as PaymentMethodOptions}>
          <FormControlLabel value="on_delivery" control={<Radio />} label="Pay On Delivery" />
          
          <FormControlLabel value="online" control={<Radio />} label="Pay Now" />
        </RadioGroup>

        <div className={classNames(styles.buttons_area)}>
          {buildContinueButton()}
          
          {buildBackToShippingDetailsButton()}
        </div>
      </div>
    );
  }

  function buildContinueButton(): JSX.Element {
    async function onClickCallback(): Promise<void> {
      const eCommerceClient: ECommerceClient = new ECommerceClient();
      
      let razorpayOrderId: string | null = null;

      if(checkoutPageState.paymentMethod == "online") {        
        try {
          razorpayOrderId = await eCommerceClient.checkout.payForCheckoutToken(checkoutPageState.checkoutToken!.id);
          console.log(`CustomLog: Payment successful`);
        }
        catch(e) {
          console.log(`CustomLog: Payment failed`);
          
          await router.push("/order_failed");
          return;
        }
      }
      
      const order: Order = await eCommerceClient.checkout.captureCheckoutToken(
        checkoutPageState.checkoutToken!.id, 
        razorpayOrderId, 
        addressToString(checkoutPageState.address)
      );

      await router.push("/order_success");
    }
    
    return (
      <button onClick={onClickCallback}>Continue</button>
    );
  }

  function buildBackToShippingDetailsButton(): JSX.Element {
    function onClickCallback(): void {
      checkoutPageState.step -= 1;
    }
    
    return <a onClick={onClickCallback}>Back to shipping</a>;
  }

  return render();
}


export default PaymentStep;