import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../model/Product';

import { environment as env} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }


  getProducts(){
    return this.http.get<Product[]>(env.baseUrlAPI + 'product');
  }

  PostProduct(product: Product){
    return this.http.post<Product>(env.baseUrlAPI + 'product', product);
  }

}
