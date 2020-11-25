import {Component, OnInit} from '@angular/core';
import {SessionService} from '../../../shared/services/session.service';
import {Router} from '@angular/router';
import {UtilsService} from '../../../shared/services/utils.service';
import {Product} from '../../../shared/models/Product';
import {ProductService} from '../../../shared/services/product.service';
import {APP_CONSTANTS} from '../../../shared/constants/app-constants';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  filter: any = {};
  product_count = 0;
  selectedProduct = null;
  allProducts: Product[] = [];

  constructor(private _productService: ProductService,
              private _sessionService: SessionService,
              private _router: Router,
              private _utilService: UtilsService) {
  }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this._productService.getProducts().subscribe((response: any) => {
      const data = response.data;
      if (!data || !data.products) {
        this._utilService.toast('Cannot Load Products! Try Again Later', 'Error!', 'error');
        return;
      }
      this.allProducts = data.products;
      this.products = data.products;
      this.product_count = data.product_count;
    });
  }

  onCategorySelected(event: any) {
    this.filter.category = event;
    if (!event || event === '') {
      this.getAllProducts();
    }
    this.products = this.allProducts.filter((p) => {
      return p.category === event;
    });
  }


  fetchProduct(id, frame: any) {
    this._productService.getProductDetails(id).subscribe((response: any) => {
      const data = response.data;
      if (!data || !data.product) {
        this._utilService.toast('Cannot Load Products! Try Again Later', 'Error!', 'error');
        return;
      }
      this.selectedProduct = data.product;
      frame.show();
    });

  }
}
