import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRegisterRoutingModule } from './customer-register-routing.module';
import { CustomerRegisterComponent } from './customer-register.component';


@NgModule({
  declarations: [
    CustomerRegisterComponent
  ],
  imports: [
    CommonModule,
    CustomerRegisterRoutingModule
  ]
})
export class CustomerRegisterModule { }
