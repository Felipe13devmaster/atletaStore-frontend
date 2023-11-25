import { Injectable } from '@angular/core';

import { Apollo, gql } from 'apollo-angular';
import { Observable, map, of } from 'rxjs';

import { Product } from '../../../core/models/models';

const PRODUCTS = gql`
 { 
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

const products: Product[] = [
  {
    brand: 'Nike',
    code: '00002',
    description: 'Nike PG-5 Unissex Roxo',
    gender: 'Unissex',
    imagesUrl: [
      'https://artwalk.vteximg.com.br/arquivos/ids/232545-1000-1000/Tenis-Nike-PG-5-Roxo-4.jpg?v=637534232676370000',
      'https://artwalk.vteximg.com.br/arquivos/ids/232542-1000-1000/Tenis-Nike-PG-5-Roxo.jpg?v=637534232393730000',
      'https://artwalk.vteximg.com.br/arquivos/ids/232544-1000-1000/Tenis-Nike-PG-5-Roxo-3.jpg?v=637534232578270000',
      'https://artwalk.vteximg.com.br/arquivos/ids/232543-1000-1000/Tenis-Nike-PG-5-Roxo-2.jpg?v=637534232484200000'
    ],
    price: 549.99,
    sizes: [
      '38', '39', '40', '41'
    ]
  },
  {
    brand: 'Nike',
    code: '00001',
    description: 'Nike Impact 4 Masculino Azul',
    gender: 'Masculino',
    imagesUrl: [
      'https://www.nike.com.br/tenis-nike-air-max-impact-4-masculino-024252.html?cor=15#pid2',
      'https://www.nike.com.br/tenis-nike-air-max-impact-4-masculino-024252.html?cor=15#pid1',
      'https://www.nike.com.br/tenis-nike-air-max-impact-4-masculino-024252.html?cor=15#pid4',
      'https://www.nike.com.br/tenis-nike-air-max-impact-4-masculino-024252.html?cor=15#pid3'
    ],
    price: 799.99,
    sizes: [
      '37', '38', '39', '40'
    ]
  }
]

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private apollo: Apollo) { }

  getProducts(): Observable<Product[]> {
    // return this.apollo.watchQuery<any>({ query: PRODUCTS }).valueChanges.pipe(map(result => result.data.products))

    return of(products);

  }
}
