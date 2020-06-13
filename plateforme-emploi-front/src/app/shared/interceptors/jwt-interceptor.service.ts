import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {JwtHelperService} from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class JwtInterceptorService implements HttpInterceptor {

  intercept(request: HttpRequest <any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token = localStorage.getItem('token');
    const helper = new JwtHelperService();



    if (!helper.isTokenExpired(localStorage.getItem('token'))) {
      request = request.clone({
        setHeaders: {
          Authorization: token
        }
      });

    }
    return next.handle(request);
  }
}
