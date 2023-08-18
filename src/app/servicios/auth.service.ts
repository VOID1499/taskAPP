import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpResponse } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class AuthService {


  private user$:BehaviorSubject<any> = new BehaviorSubject<any>(null)
  private user = null;

  constructor(private http: HttpClient) {
    if(localStorage.getItem("user") && this.getCookie("token") != null ){
      const user = JSON.parse(localStorage.getItem('user')!);
      this.setUser(user)
    }
  }

  getUserObservable():Observable<any>{
    return this.user$.asObservable();
  }

  setUser(user:any){
      this.user = user;
      this.user$.next(this.user);
      localStorage.setItem("user",JSON.stringify(user));
  }


  register(username: string,email:string, password: string):Observable<any> {
    const url = `${environment.apiUrl}register`;
    const data = {username,email,password};
    return this.http.post(url, data);
  }

  
  login(email: string, password: string):Observable<any> {
    const url = `${environment.apiUrl}login`;
    const data = {email,password};
    return this.http.post(url,data)
  }

  logout():Observable<any> {
    return this.http.post(`${environment.apiUrl}logout`,"")
  }

  getCookie(name: string): string | null {
    const cookieString = decodeURIComponent(document.cookie);
    const cookies = cookieString.split('; ');

    for (const cookie of cookies) {
      const [cookieName, cookieValue] = cookie.split('=');
      if (cookieName === name) {
        return cookieValue;
      }
    }

    return null; // Si no se encontró la cookie
  }


}
