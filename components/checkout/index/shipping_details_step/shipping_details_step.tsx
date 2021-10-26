import classNames from "classnames";
import Link from "next/link";
import React from "react";
import CheckoutPageState, { checkoutPageContext } from "../checkout_page_state";
import styles from "./shipping_details_step_styles.module.scss";

const ShippingDetailsStep: React.FC = (props) => {
  const checkoutPageState: CheckoutPageState = React.useContext<CheckoutPageState>(checkoutPageContext);

  const [name, setName] = React.useState<string>(checkoutPageState.address.name);
  const [addressLine1, setAddressLine1] = React.useState<string>(checkoutPageState.address.line1);
  const [addressLine2, setAddressLine2] = React.useState<string>(checkoutPageState.address.line2);
  const [city, setCity] = React.useState<string>(checkoutPageState.address.city);
  const [pinCode, setPinCode] = React.useState<string>(checkoutPageState.address.pinCode);
  const [state, setState] = React.useState<string>(checkoutPageState.address.state);

  function render(): JSX.Element {
    return (
      <div className={classNames(styles.shipping_details_step)}>
        <input placeholder="Name" value={name} onChange={(e) => setName(e.currentTarget.value)} />
        
        <input placeholder="Address Line 1" value={addressLine1} onChange={(e) => setAddressLine1(e.currentTarget.value)} />
        
        <input placeholder="Address Line 2" value={addressLine2} onChange={(e) => setAddressLine2(e.currentTarget.value)} />

        <input placeholder="City" value={city} onChange={(e) => setCity(e.currentTarget.value)} />
        
        <input placeholder="Pin Code" value={pinCode} onChange={(e) => setPinCode(e.currentTarget.value)} />
        
        <input placeholder="State" value={state} onChange={(e) => setState(e.currentTarget.value)} />

        <div className={classNames(styles.buttons_area)}>
          {buildToPaymentButton()}
          
          <Link href="/cart">
            <a>Back to Cart</a>
          </Link>
        </div>
      </div>
    );
  }

  function buildToPaymentButton(): JSX.Element {
    function onClickCallback(): void {
      checkoutPageState.address = {
        name: name,
        line1: addressLine1,
        line2: addressLine2,
        city: city,
        pinCode: pinCode,
        state: state
      };
      checkoutPageState.step += 1;
    }
    
    return (
      <button onClick={onClickCallback}>To payment</button>
    );
  }

  return render();
};

export default ShippingDetailsStep;