import { globalData } from "../global_data/global_data";
import Product from "./product";

export default class Inventory {
  public getNewestArrivalProducts = async () => {
    const response: Response = await fetch(`http://localhost:${globalData.port}/api/products/min_time=2021-10-03`);
        
    return this.mapResponseToProducts(response);
  };

  public getAllProducts = async () => {
    const response: Response = await fetch(`http://localhost:${globalData.port}/api/products/`);
        
    return this.mapResponseToProducts(response);
  };

  private mapResponseToProducts = async (response: Response) => {
    const r: Product[] = [];
    
    const productsData = await response.json();

    for(const data of productsData) {
      r.push(
        new Product({
          id: data["id"], productName: data["product_name"], brand: data["brand"], description: data["description"],
          arrivalTime: data["arrival_time"], stock: data["stock"], originalPrice: data["price"], 
          discountType: data["discount"].type, discountAmount: data["discount"].amount, 
          images: data["images"], videos: data["videos"], variantOf: data["variant_of"]
        })
      );
    }

    return r;
  };
}