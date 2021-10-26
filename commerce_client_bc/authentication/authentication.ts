import { globalData } from "../global_data/global_data";
import Token from "../token";
import User from "../user";

export interface AuthenticationResponse {
  token: Token,
  user: User
}

export default class Authentication {
  public signup = async (email: string, password: string) => {
    if(globalData.token != null)
      throw new Error(`User already logged in`);
      
    const response: Response = await fetch(
      `http://localhost:${globalData.port}/api/auth/signup?email=${email}&password=${password}`, 
      { method: "POST" }
    );

    if(response.status / 100 == 4)
      throw new Error((await response.json()).error);

    const responseData: any = response.json();
    const parsedToken: Token = JSON.parse(responseData["token"]);

    globalData.token = parsedToken;

    const r: AuthenticationResponse = {
      token: parsedToken,
      user: {
        id: responseData["user"]["id"],
        email: responseData["user"]["email"],
        password: responseData["user"]["password"]
      }
    };

    return r;
  }

  public login = async (email: string, password: string) => {
    if(globalData.token != null)
      throw new Error(`User already logged in`);
      
    const response: Response = await fetch(
      `http://localhost:${globalData.port}/api/auth/login?email=${email}&password=${password}`, 
      { method: "POST" }
    );

    if(response.status >= 400 && response.status < 500)
      throw new Error((await response.json()).error);    

    const responseData: any = await response.json();
    
    const parsedToken: Token = responseData["token"];
    console.log(`CustomLog: Parsed Login Token:\n${JSON.stringify(parsedToken, null, 2)}`);

    globalData.token = parsedToken;

    const r: AuthenticationResponse = {      
      user: {
        id: responseData["user"]["id"],
        email: responseData["user"]["email"],
        password: responseData["user"]["password"]
      },
      token: parsedToken
    };

    return r;
  };
}