import { Tax } from "../enums/tax";
import { Unit } from "../enums/unit";

export class Invoice {
    constructor(){}

    name: string = "";
    quantity: number = 0;
    unit?: Unit;
    netto: number = 0;
    tax?: Tax;
    brutto: number = 0;
}