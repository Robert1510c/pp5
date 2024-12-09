import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() { }

  customersList : Customer[] = [];

  addCustomer(customer : Customer){
    this.customersList.push(customer);
    console.log(this.customersList)
  }

  getCustomers() : Customer[] {
    return this.customersList ;
  }

  removeCustomer(customer: Customer){
    this.customersList = this.customersList.filter((x: Customer) =>{
      return x.inputnip !== x.inputnip
    }
    )}
  
}