import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {tokenNotExpired} from "angular2-jwt";


@Injectable()
 export class AuthService {


    public getToken(): string {
        return sessionStorage.getItem('token');
      }
      
      public isAuthenticated(): boolean {
        // get the token
        const token = this.getToken();
        // return a boolean reflecting 
        // whether or not the token is expired
        return tokenNotExpired(null, token);
      }


 }