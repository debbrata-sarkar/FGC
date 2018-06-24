import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {BillingModel} from "./billing-model";
import "rxjs/Rx";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
 
 
 @Injectable()
 export class BillingService {
 

    constructor(public http: HttpClient) { }


    // _errorHandler(error:Response){
    //   console.log(error);
    //   return Observable.throw(error || "Internal server error");
    // }
 }