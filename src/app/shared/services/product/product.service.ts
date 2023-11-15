import { Injectable } from '@angular/core';

import { Apollo, gql } from 'apollo-angular';
import { Observable, map } from 'rxjs';

import { Product } from "../../../core/models/models";

const PRODUCTS = gql`
  { Products
    getProducts {
      brand
      code
      description
      gender
      imagesUrl
      price
      sizes
    }
  }
`;

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private apollo: Apollo) { }

  getProducts(): Observable<Product[]> {
    return this.apollo.watchQuery<any>({query: PRODUCTS}).valueChanges.pipe(map(result => result.data.products))
  }
}
