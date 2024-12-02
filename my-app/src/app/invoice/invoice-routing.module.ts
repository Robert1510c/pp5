import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerFormComponent } from './components/customer-form/customer-form.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { Router, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'customers-form',
    component: CustomerFormComponent
  },
  {
    path: 'customer-list',
    component: CustomerListComponent
  }

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class InvoiceRoutingModule { }
