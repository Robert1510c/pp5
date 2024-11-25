  class Customer{
    inputcn: string ="";
    inputnip: string = "";
    inputcity: string = "";
    inputstreet: string = "";
    inputhousenr: string = "";
    inputapnr: string = "";
    inputzip: string = "";
    inputcomments: string = "";
    inputbranch: string = "";
    exampleCheck1: boolean = true;

    getData(){
        return `${this.inputcn} ${this.inputnip}`;
      }
    
    getAdress(){
        return `${this.inputcity} ${this.inputstreet} ${this.inputhousenr}`
    }
  }

  class Supplier extends Customer{
    constructor(accNumber: any){
        super();
        this.accNumber = accNumber;
    }
    accNumber: number = 0;
    invoice: number = 0;

    
  }


