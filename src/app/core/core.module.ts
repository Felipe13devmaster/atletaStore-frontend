import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';

import { NavbarComponent } from './components/navbar/navbar.component';
import { DialogLoginComponent } from './components/dialog-login/dialog-login.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NavbarComponent,
    DialogLoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class CoreModule { }
