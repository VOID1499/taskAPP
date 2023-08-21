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

  
    // Establecer el traspaso de cookies
    const modifiedRequest = request.clone({
      withCredentials:true
    });

   
  
  return next.handle(modifiedRequest);
  }
}
