import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

const TOKEN_KEY = "user_session";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  public signin(email: string, password: string) {
    const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
    return this.httpClient.post(`${environment.apiUrl}/user/signin`, {"email":email, "password":password}, { headers: headers });
  }

  public saveToken(token: string) {
    localStorage.setItem(TOKEN_KEY, token);
  }
  public getToken() {
    return localStorage.getItem(TOKEN_KEY)
  }
  public removeToken() {
    localStorage.removeItem(TOKEN_KEY);
  }
  public clear() {
    localStorage.clear();
  }
  
}
