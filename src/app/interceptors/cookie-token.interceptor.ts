
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../servicios/auth.service';

@Injectable()
export class CookieTokenInterceptor implements HttpInterceptor {

  constructor(
    private authService:AuthService
  ) {}

  intercept(req: HttpRequest<any>,next: HttpHandler): Observable<HttpEvent<any>> {

    const token = this.authService.getToken("token");
    if(token){
      const  autRequest = req.clone({
          headers: new HttpHeaders({
            'Authorization': `${token}`
          })
      })

      return next.handle(autRequest);
    }

    return next.handle(req);
  }
}

