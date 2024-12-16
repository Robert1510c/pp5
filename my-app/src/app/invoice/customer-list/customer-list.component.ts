import { Component, OnDestroy, OnInit } from '@angular/core';
import { Customer } from '../models/customer';
import { CustomerService } from '../services/customer-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-list',
  standalone : false,
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.scss'
})
export class CustomerListComponent implements OnInit, OnDestroy{
  customerList : Customer[] =[];

  constructor (
    private customerService:CustomerService,
    private router: Router
  ) {
    console.log(this.customerService.getCustomers());
  }
  ngOnInit() {
    throw new Error('Method not implemented.');
  }
  ngOnDestroy() {
    this.customerList = this.customerService.getCustomers();
  }

  redirectToForm(){
    this.router.navigate(['/invoice/customer-form'])
  }
  deleteCustomerParent(customer : Customer){
    console.log(this.customerList);
    this.customerList = this.customerService.removeCustomer(customer);
    console.log(this.customerList)
  }
}