import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { catchError, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';


const TOKEN_KEY = "user_session";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  

  constructor(private httpClient: HttpClient, private router: Router) { }

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
  public get isLoggedIn(): boolean {
    return !!this.getToken();
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

  logout(): void {
    // Clear authentication token from localStorage
    localStorage.removeItem(TOKEN_KEY);

    // Optionally, clear any other user data from localStorage if required
    localStorage.removeItem('user'); // Remove user data if stored

    // Redirect to login page
    this.router.navigate(['/signin']);
  }

  // Check if the user is authenticated by verifying the token
  isAuthenticated(): boolean {
    return !!this.getToken(); // Checks if token exists
  }


}
