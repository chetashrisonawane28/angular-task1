import { EventEmitter } from "@angular/core";
import { BehaviorSubject } from "rxjs";

export class MyProductCartService{

    productList : any;
    
    
    constructor() { }
    
    productData = new EventEmitter();

    getOrderTotal(product : any){
        product.pOrderTotal = product.pQty * product.pPrice;
    }

}