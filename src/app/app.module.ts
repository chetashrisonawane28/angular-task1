import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuyOptionComponent } from './buy-option/buy-option.component';
import { ProductCartComponent } from './product-cart/product-cart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyProductCartService } from './shared/services/myProductCart.services';



@NgModule({
  declarations: [
    AppComponent,
    BuyOptionComponent,
    ProductCartComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    MyProductCartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
