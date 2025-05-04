import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { BehaviorSubject, catchError, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';


const TOKEN_KEY = "user_session";
const USER_KEY = 'user';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLoggedInSubject = new BehaviorSubject<boolean>(Boolean(this.isAuthenticated()));
  public isLoggedIn$ = this.isLoggedInSubject.asObservable();
  

  constructor(private httpClient: HttpClient, private router: Router) { }

  public signin(userid: string, password: string): Observable<{ access_token: string, role: string }> {
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
    return this.httpClient.post<{ access_token: string, role: string }>(
      `${environment.apiUrl}/user/login`, 
      { userid, password }, 
      { headers }
    );
  }


  saveSession(token: string, role: string,isAuthenticated: boolean = true) {
    localStorage.setItem(TOKEN_KEY, token);
    localStorage.setItem(USER_KEY, JSON.stringify({ role, isAuthenticated: true }));
    this.updateLoginStatus(true);
  }
  
  getUser(): { role: string, isAuthenticated: boolean } | null {
    const data = localStorage.getItem(USER_KEY);
    return data ? JSON.parse(data) : null;
  }


  public saveToken(token: string,) {
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
  logout(): void {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
    this.updateLoginStatus(false);
    this.router.navigate(['/signin']);
  }

  registerUser(userid: string, username: string, password: string, role: string, address: string): Observable<any> {
    const payload = { userid, username, password, role, address };
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  
    return this.httpClient.post(`${environment.apiUrl}/user/register`, payload, { headers }).pipe(
      catchError(this.handleError)
    );
  }
  
  private handleError(error: HttpErrorResponse | any): Observable<never> {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Client-side error: ${error.error.message}`;
    } else {
      errorMessage = `Server error: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(() => new Error(errorMessage));
  }
  
  
  // Check if the user is authenticated by verifying the token
  isAuthenticated(): Boolean {
    return !!this.getToken(); // Checks if token exists
  }


  // Call this on login
  updateLoginStatus(status: boolean) {
    this.isLoggedInSubject.next(status);
  }
  
}
