import Authentication from "./authentication/authentication";
import { globalData, GlobalData } from "./global_data/global_data";
import Inventory from "./inventory/inventory";
import Product from "./inventory/product";
import Token from "./token";
import User from "./user";

export default class CommerceClient {
  public constructor(args?: { token?: Token }) {
    if(args == undefined)
      globalData.token = null;
    else
      globalData.token = args.token ?? null;
  }

  
  public readonly inventory: Inventory = new Inventory();
  public readonly authentication: Authentication = new Authentication();
}