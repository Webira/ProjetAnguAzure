import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
    isConnected: boolean = false;
    connection(){ 
      this.isConnected = true;
    }
    disconnection(){
      this.isConnected = false;
    }
   
  currentTweet: any;
}

