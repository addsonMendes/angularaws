import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product: Product = new Product();
  products: Product[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  cadastraProduto(){
    this.products.push(this.product);
    this.product = new Product();
  }

}
