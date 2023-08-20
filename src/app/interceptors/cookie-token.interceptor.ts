import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service/public-api';
import { Observable } from 'rxjs';

@Injectable()
export class CookieTokenInterceptor implements HttpInterceptor {

  constructor(
    private cookieService:CookieService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    // Clonar la solicitud original
    const modifiedRequest = request.clone({
      setHeaders: {
        'Content-Type': 'application/json'
      },
      withCredentials: true
    });
    
    if(this.cookieService.check("token")){
      const token = this.cookieService.get("token")
      this.cookieService.set("token",token);
    }  
  
  return next.handle(modifiedRequest);
  }
}
