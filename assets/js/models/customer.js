"use strict";
class Customer {
    constructor() {
        this.inputcn = "";
        this.inputnip = "";
        this.inputcity = "";
        this.inputstreet = "";
        this.inputhousenr = "";
        this.inputapnr = "";
        this.inputzip = "";
        this.inputcomments = "";
        this.inputbranch = "";
        this.exampleCheck1 = true;
    }
    getData() {
        return `${this.inputcn} ${this.inputnip}`;
    }
    getAdress() {
        return `${this.inputcity} ${this.inputstreet} ${this.inputhousenr}`;
    }
}
class Supplier extends Customer {
    constructor(accNumber) {
        super();
        this.accNumber = 0;
        this.invoice = 0;
        this.accNumber = accNumber;
    }
}
