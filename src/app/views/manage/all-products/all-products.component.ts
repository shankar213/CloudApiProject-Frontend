import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../../shared/services/product.service';
import {Router} from '@angular/router';
import {UtilsService} from '../../../shared/services/utils.service';
import {Product} from '../../../shared/models/Product';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(private _productService: ProductService,
              private _router: Router,
              private _utilService: UtilsService) {
  }

  elements: any = [];
  headElements = ['id', 'name', 'brand', 'category', 'price', 'qty'];

  ngOnInit(): void {
    this.getAllProducts();
  }

  private getAllProducts(): void {
    this._productService.getProducts().subscribe((response: any) => {
      const data = response.data;
      if (!data || !data.products) {
        this._utilService.toast('Cannot Load Products! Try Again Letter', 'Error!', 'error');
        return;
      }
      this.products = data.products;
    });
  }

  goToEdit(id: number) {
    this._router.navigate(['/manage/add-product/' + id], {queryParams: {edit: true}});
  }

  deleteProduct(id: number) {
    this._productService.deleteProduct(id).subscribe((response: any) => {
      const data = response.data;
      if (!data) {
        this._utilService.toast('Unable to Delete the product', 'Error!', 'error');
        return;
      } else {
        this._utilService.toast('Product Deleted Successfully', 'Deleted!', 'success');
      }
      this.getAllProducts();
    });

  }
}
