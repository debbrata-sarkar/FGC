import { Injectable, Injector } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(public auth: AuthService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    // const auth = this.inj.get(BillingService);
    // const authToken = auth.getToken();

    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.auth.getToken()}`
      }
    });
    return next.handle(request);

    // const authReq = request.clone({
    //   headers: request.headers.set("Authorization", authToken)
    // });
    // return next.handle(authReq);

  }
}

// import { Injectable, Injector } from '@angular/core';
// import {
//   HttpRequest,
//   HttpHandler,
//   HttpEvent,
//   HttpInterceptor,
//   HttpHeaders
// } from '@angular/common/http';

// import { Observable } from 'rxjs/Observable';
// import { BillingService } from '../billing.service';
// @Injectable()
// export class TokenInterceptor implements HttpInterceptor {
//   constructor(private inj: Injector) {}
//   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
//     const auth = this.inj.get(BillingService);
//     const token = auth.getToken();
//     const authReq = request.clone({
//       headers: request.headers.set("Authorization", `Bearer ${token}`)
//     });
//     return next.handle(authReq);
//   }
// }


// import { Injectable } from '@angular/core';
// import {
//   HttpRequest,
//   HttpHandler,
//   HttpEvent,
//   HttpInterceptor
// } from '@angular/common/http';
// import { BillingService } from '../billing.service';
// import { Observable } from 'rxjs/Observable';

// @Injectable()
// export class TokenInterceptor implements HttpInterceptor {
//   constructor(public auth: BillingService) {}
//   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
//     // request = request.clone({
//     //   setHeaders: {
//     //     Authorization: `Bearer ${this.auth.getToken()}`
//     //   }
//     // });
//     // return next.handle(request);
//     const authReq = request.clone({
//       headers: request.headers.set('Authorization', 'Bearer LrmXabm55R')
//     });
//     return next.handle(authReq);
//   }
// }
