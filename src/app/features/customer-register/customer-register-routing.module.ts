import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerRegisterComponent } from './customer-register.component';

const routes: Routes = [
  {path: '', component: CustomerRegisterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRegisterRoutingModule { }
