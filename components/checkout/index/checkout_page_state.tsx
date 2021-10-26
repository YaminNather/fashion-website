import { ChangeNotifier } from "change-notifier";
import ECommerceClient from "ecommerce_client/dist/ecommerce_client";
import CheckoutToken from "ecommerce_client/dist/models/checkout_token";
import Token from "ecommerce_client/dist/token";
import react from "react";

export type PaymentMethodOptions = "on_delivery" | "online";

export function addressToString(address: Address): string {
  return (
    `
      ${address.line1}
      ${address.line2}
      ${address.city}
      ${address.pinCode}
      ${address.state}
    `
  );
}

export interface Address {
  readonly name: string;
  readonly line1: string;
  readonly line2: string;
  readonly city: string;
  readonly pinCode: string;
  readonly state: string;  
}

export function createEmptyAddress(): Address {
  return {
    name: "",
    line1: "",
    line2: "",
    city: "",
    pinCode: "",
    state: ""
  };
}

export default class CheckoutPageState extends ChangeNotifier {
  public async getCheckoutTokenFromBackend(id: string): Promise<void> {
    const eCommerceClient: ECommerceClient = new ECommerceClient();
    const token: Token | null = eCommerceClient.authentication.getToken();
    if(token == null)
      throw new Error("Token not available");

    this.checkoutToken = await eCommerceClient.checkout.getCheckoutToken(id);
    
  }

  public get checkoutToken(): CheckoutToken | null {
    return this._checkoutToken;
  }

  private set checkoutToken(value: CheckoutToken | null) {
    this._checkoutToken = value;
    this.notifyListeners();
  }
  
  public get step(): number {
    return this._step;
  }
  
  public set step(value: number) {
    this._step = value;
    this.notifyListeners();
  }

  public get address(): Address {
    return this._address;
  }

  public set address(value: Address) {
    this._address = value;
    this.notifyListeners();
  }

  public get paymentMethod(): PaymentMethodOptions {
    return this._paymentMethod;
  }

  public set paymentMethod(value: PaymentMethodOptions) {
    this._paymentMethod = value;
  }


  
  
  private _checkoutToken: CheckoutToken | null = null;
  private _step: number = 0;
  private _address: Address = createEmptyAddress();
  private _paymentMethod: PaymentMethodOptions = "on_delivery";
}

export const checkoutPageContext: React.Context<CheckoutPageState> = react.createContext<CheckoutPageState>(new CheckoutPageState());