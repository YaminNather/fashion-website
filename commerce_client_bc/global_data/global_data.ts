import Token from "../token";

export class GlobalData {  
  public token: Token | null = null;
  
  public port: string = "8000";
}

export const globalData: GlobalData = new GlobalData();
