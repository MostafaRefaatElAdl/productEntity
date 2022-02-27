import { Component, OnInit } from '@angular/core';
import { IProduct } from '../models/IProduct';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
//Initialize Array of products 
  products:IProduct[]=[
    {url:"../assets/leafRake.jpg",pName:"Leaf Rake",code:"gdn 0011",available:new Date("03/19/2021"),price:19.95,star:3},
    {url:"../assets/gardenCart.jpg",pName:"Garden Cart",code:"gdn 0023",available:new Date("03/18/2021"),price:32.99,star:5},
    {url:"../assets/hammer.jpg",pName:"Hammer",code:"tbx 0048",available:new Date("03/21/2021"),price:8.90,star:4},
  ]
  
//Initialize string to use at filtration
  filterName:string=""
  constructor() { }
  isShow = false;
 
//^Function to toggle imgs
  toggleDisplay() {
    this.isShow = !this.isShow;
  }

//saving data before filtration
  originalProducts:IProduct[]= this.products;
//^function to filter data
  filterTable(){
    console.log(this.filterName)
    if (this.filterName.length === 0) {
      this.products = this.originalProducts;
    }
    this.products=this.products
    .filter(pro=>pro.pName.toLowerCase().includes( this.filterName.toLowerCase()) )
  }
//^function to get the orignal data at backspace
  originalTable(){
    this.products = this.originalProducts;
  }

//^function to display products
  pro:IProduct|null=null;
  listProducts(product : IProduct)
  {
      for(var i=0;i<this.products.length;i++){
        if(this.products[i]==product){
          this.pro=this.products[i];
          break;
        }
    }
  }

//^function to add data
  add(product:IProduct){
    this.products.push({url:product.url,pName:product.pName,code:product.code,available:product.available,price:product.price,star:product.star})
    this.originalProducts = this.products
  }
//^function to delete data
  delete(event:any)
  {
    let targetRow =event.target.parentElement.parentElement;
    let rowCode=targetRow.children[2].innerText;
    this.products=this.products.filter(pro=>pro.code != rowCode )
      // for(var i=0;i<this.products.length;i++){
      //     this.products= this.products.filter(pro=>pro !=this.products[i]);
      //     break;
  }

  ngOnInit(): void {
  }

}
