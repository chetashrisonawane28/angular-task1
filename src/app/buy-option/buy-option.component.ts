import { Component, OnInit } from '@angular/core';
import { MyProductCartService } from '../shared/services/myProductCart.services';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { fileSizeValidator } from '../shared/validators/filesize.validator';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-buy-option',
  templateUrl: './buy-option.component.html',
  styleUrls: ['./buy-option.component.css']
})
export class BuyOptionComponent implements OnInit{

  productForm : any;
  url = 'https://www.shutterstock.com/image-vector/image-preview-icon-picture-placeholder-260nw-1716511726.jpg';
  qty : any = 1;
  id : any = 1;
  listData : any;
  validImgSize! : string;


  constructor(private MyProductCartService : MyProductCartService){}

  ngOnInit(): void {
    this.listData = [];

    this.productForm = new FormGroup({
      pImg : new FormControl('', Validators.required),
      pName : new FormControl('', Validators.required),
      pPrice : new FormControl('', Validators.required),
      pQty : new FormControl(''),
      pId : new FormControl(''),
      pOrderTotal : new FormControl('')
    })

  }
  
 
 

  
  addProduct(){
    this.listData.push(this.productForm.value);
    this.productForm.value.pImg = this.url; 
    this.productForm.value.pQty = this.qty;
    this.productForm.value.pId = this.id;
    this.url = '';
    this.id +=1;
    this.productForm.reset();
  }

  
  AddToBag(item : any){
    this.MyProductCartService.productData.emit(item);
  }
  
  dec(item : any){
    item.pQty -= 1;
  }
  inc(item : any){
    item.pQty += 1;
  }

  onSelectFile(eve : any) : void{
    // const inputElement = eve.target as HTMLInputElement;
    const file = eve.target.files[0];
    if (file.size > 100 * 1024) {
      this.validImgSize = 'Image size must be less than 100KB.';
    } else {
      this.validImgSize = '';
    
      var reader = new FileReader();
      reader.readAsDataURL(eve.target.files[0]);
      reader.onload=(event : any)=>{
        this.url = event.target.result;
      }
  }
}
}
function ngOnInit() {
  throw new Error('Function not implemented.');
}

