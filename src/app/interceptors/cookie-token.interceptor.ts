import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable()
export class CookieTokenInterceptor implements HttpInterceptor {

  constructor(
    private cookieService:CookieService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log("Interceptor de cookies")
    // Clonar la solicitud original
    const modifiedRequest = request.clone({
      setHeaders: {
        'Content-Type': 'application/json'
      },
      withCredentials: true
    });
    this.cookieService.set("prueba","hola soy un token de prueba");
    
    if(this.cookieService.check("token")){
      console.log("Segun esta cosa la cookie no existe, ayuda dios")
      const token = this.cookieService.get("token")
      this.cookieService.set("token",token);
    }  
  
  return next.handle(modifiedRequest);
  }
}
