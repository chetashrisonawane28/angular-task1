import { Component } from '@angular/core';
import { MyProductCartService } from '../shared/services/myProductCart.services';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.css']
})
export class ProductCartComponent {
  currentItem: any = [];
  orderTotal: number = 0;
  grandTotal: number = 0;
  constructor(private shoppingBagservice: MyProductCartService) { }


  ngOnInit(): void {

    this.shoppingBagservice.productData.subscribe((param: any) => {
      console.log("subscribed data", param);
      this.shoppingBagservice.getOrderTotal(param);
      this.currentItem.push(param);
      this.grandTotal = 0;
      this.currentItem.map((product : any)=>{
        this.grandTotal += product.pPrice*product.pQty;
      })
    })
  }
}