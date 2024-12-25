import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class AuthService {
  isLoggedIn: boolean=false;
  isAuthenticated(){
    const promise = new Promise<boolean>((resolve, reject) => {
      setTimeout(() => {
        resolve(this.isLoggedIn);
      },1000);
    })
    return promise;
  };
  login(){
    this.isLoggedIn = true;
  }
  logout(){
    this.isLoggedIn = false;
  }
}
