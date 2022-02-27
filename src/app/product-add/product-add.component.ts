import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IProduct } from '../models/IProduct';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

    //1- declare property of eventemitter datatype
    @Output() productAdded:EventEmitter<IProduct>=new EventEmitter<IProduct>()
    newProduct:IProduct= {url:"../assets/leafRake.jpg",pName:"",code:"",available:new Date(),price:0,star:1};
    constructor() { }
    onClick(){
      //2 raise event
      this.productAdded.emit(this.newProduct);
    }

    handleUpload(e:any):void{
      this.newProduct.url = e.target.value;
  
   }

  ngOnInit(): void {
  }

}
