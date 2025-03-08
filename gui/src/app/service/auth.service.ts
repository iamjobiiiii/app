import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';

const TOKEN_KEY = "user_session";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  public signin(userid: string, password: string): Observable<{ access_token: string, role: string }> {
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
    return this.httpClient.post<{ access_token: string, role: string }>(
      `${environment.apiUrl}/user/login`, 
      { userid, password }, 
      { headers }
    );
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
