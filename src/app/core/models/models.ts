export interface Product {
  brand: string;
  code: string;
  description: string;
  gender: string;
  imagesUrl: string[];
  price: number;
  sizes: string[];
}

export interface DialogLoginData {
  email: string;
  password: string;
}