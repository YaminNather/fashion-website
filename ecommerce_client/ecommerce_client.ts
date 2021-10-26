import ECommerceClient from "ecommerce_client/dist/ecommerce_client";

export default function getECommerceClient(): ECommerceClient {
  return new ECommerceClient();
}