import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/Product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product: Product = new Product();
  products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    try {
      this.productService.getProducts().subscribe(data => {
        this.products = data;
      }, err => {
        console.log('Problemas ao listar produtos! Erro: ' + err);
      });
    } catch (error){
      console.log('Problemas ao listar produtos! Erro: ' + error);
    }
  }

  cadastraProduto(){
    try {
      this.productService.PostProduct(this.product).subscribe(data => {
        console.log('Produto cadastrado com sucesso!');
        this.product = new Product();
        }, err => {
          console.log('Problemas ao cadastrar produto! Erro: ' + err);
        });
      this.getProducts();
    } catch (error) {
      console.log('Problemas ao cadastrar produto! Erro: ' + error);
    }
  }



}
