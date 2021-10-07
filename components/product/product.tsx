export default interface Product {
  name: string;
  imageSrc: string;
  price: number;
  discountedPrice: number;
  discount: Discount;  
}

export interface Discount {
  discount: number;
  type: "cash" | "percentage";

  formattedString: string;
}