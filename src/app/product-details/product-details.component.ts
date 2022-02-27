import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '../models/IProduct';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  @Input() productDetails:IProduct|null=null;
  constructor() { }

  ngOnInit(): void {
  }

}
