import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import {TokenInterceptor} from './auth/token.interceptor';
import { AuthService } from './auth.service';
import { BillingService } from './billing.service';
import {MaterializeModule} from 'angular2-materialize';
import {ShareService} from './share.service';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';
import { LoaderComponent } from './loader/loader.component';
import { MyDatePickerModule } from 'mydatepicker';
import { RouterModule, Routes } from '@angular/router';
import { BillingZoneComponent } from './billing-zone/billing-zone.component';


const mainroutes: Routes = [
  { path :  '**', component : BillingZoneComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    BillingZoneComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterializeModule,
    AngularMultiSelectModule,
    MyDatePickerModule,
    RouterModule.forRoot(mainroutes)
    // JasperoAlertsModule
  ],
  providers: [
    AuthService,
    BillingService,
    ShareService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
