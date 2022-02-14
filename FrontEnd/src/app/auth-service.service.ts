import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private _registerUrl="http://localhost:8080/api/register";
  private _loginUrl="http://localhost:8080/api/login";
  private _addUrl="http://localhost:8080/api/admin/add";

  constructor( private http:HttpClient) { }

  registeredUser(user:{email:String,password:String}){
    return this.http.post(this._registerUrl,user)
  }

  loginuser(user:{email:String,password:String}){
    return this.http.post(this._loginUrl,user)
  }

  addjob(admin:{}){
    return this.http.post(this._addUrl,admin)
  }
}
