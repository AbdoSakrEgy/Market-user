import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css'],
})
export class ProductsDetailsComponent {
  id: any;
  product: any = {};
  isLoading: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService
  ) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getProductByID();
  }
  getProductByID() {
    this.isLoading = true;
    this.productsService.getProductByID(this.id).subscribe((res) => {
      this.product = res;
    });
    this.isLoading = false;
  }
}
