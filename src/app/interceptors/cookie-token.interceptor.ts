import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CookieTokenInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
  // Clonar la solicitud original
  const modifiedRequest = request.clone({
    setHeaders: {
      'Content-Type': 'application/json'
    },
    withCredentials: true
  });
  
  return next.handle(modifiedRequest);
  }
}
