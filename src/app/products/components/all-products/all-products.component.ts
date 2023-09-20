import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css'],
})
export class AllProductsComponent {
  products: any[] = [];
  categories: any[] = [];
  isLoading: boolean = false;
  cartProducts: any[] = [];

  constructor(private productsService: ProductsService) {}
  ngOnInit() {
    this.getAllProducts();
    this.getAllCategories();
  }
  getAllProducts() {
    this.isLoading = true;
    this.productsService.getAllProducts().subscribe((res: any) => {
      this.products = res;
      this.isLoading = false;
    });
  }
  getAllCategories() {
    this.isLoading = true;
    this.productsService.getAllCategories().subscribe((res: any) => {
      this.categories = res;
      this.isLoading = false;
    });
  }
  filterCategory(event: any) {
    this.isLoading = true;
    if (event.target.value === 'all') {
      this.getAllProducts();
    } else {
      this.productsService
        .filterCategory(event.target.value)
        .subscribe((res: any) => {
          this.products = res;
          this.isLoading = false;
        });
    }
  }
  addToCart(event: any) {
    if ('cart' in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem('cart')!);
      let exist = this.cartProducts.find((obj) => obj.item.id == event.item.id);
      if (exist) {
        alert('Product already in your cart');
      } else {
        this.cartProducts.push(event);
        localStorage.setItem('cart', JSON.stringify(this.cartProducts));
      }
    } else {
      this.cartProducts.push(event);
      localStorage.setItem('cart', JSON.stringify(this.cartProducts));
    }
  }
}
