import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import {Injectable, OnInit} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {BillingModel} from "./billing-model";
import "rxjs/Rx";

@Injectable()
export class ShareService implements OnInit{

  constructor(public http: HttpClient) {
   }
  
  dateOption={
    format: 'dd/mm/yyyy',
    min: new Date()
  }

  init() {
    var $slider = document.getElementById("slider");
    var $toggle = document.getElementById("toggle");
    var $cancel = document.getElementById("cancel");

    $toggle.addEventListener('click', function() {
      var isOpen = $slider.classList.contains('slide-in');
  
      $slider.setAttribute('class', isOpen ? 'slide-out' : 'slide-in');
    });

    $cancel.addEventListener('click', function() {
      var isOpen = $slider.classList.contains('slide-out');
  
      $slider.setAttribute('class', isOpen ? 'slide-in' : 'slide-out');
    });
  }

  ngOnInit() {
    // this.getzoneDetails();
    // console.log('Hi');
  }
  
}