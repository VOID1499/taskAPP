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
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json' // Establecer el Content-Type a application/json
      }),
      withCredentials: true //establecer el traspaso de cookies
    };
    const modifiedRequest = request.clone(httpOptions);
    
    return next.handle(modifiedRequest);
  }
}
