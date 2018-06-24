import { FormBuilder,  FormGroup, FormControl, FormArray, NgForm, Validators, AbstractControl } from '@angular/forms';
import {MaterializeDirective,MaterializeAction} from "angular2-materialize";
import { Component, OnInit, EventEmitter, Output, Input, SimpleChanges } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BillingService } from '../billing.service';
import {ShareService} from '../share.service';
import swal from 'sweetalert2';
import { clone } from 'lodash';

declare var $: any;
declare let Materialize:any;

@Component({
  selector: 'app-billing-zone',
  templateUrl: './billing-zone.component.html',
  styleUrls: ['./billing-zone.component.css']
})
export class BillingZoneComponent implements OnInit {

  constructor(fb: FormBuilder, fc: FormBuilder, private _billingService : BillingService, public http: HttpClient, private shareService: ShareService) {
  
  }

  ngOnInit() {

    // window.onload = function(){
    //   $('.loader').fadeOut();
    // };

  }

}
