export class Product {
  id: string;
  name: string;
  brand: string;
  description: string;
  seller: string;
  price: number;
  images: string[];
  qty: number;
  category: string;

  constructor() {
    this.id = '';
    this.name = '';
    this.brand = '';
    this.description = '';
    this.seller = '';
    this.price = 0;
    this.images = [];
    this.qty = 0;
    this.category = '';
  }
}
