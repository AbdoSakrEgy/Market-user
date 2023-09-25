import { Component } from '@angular/core';
import { CartsService } from '../../services/carts.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  cartProducts: any[] = [];
  totalPrice: number = 0;
  isOrderSuccess: boolean = false;
  numOfProudcts: number = 0;

  constructor(private cartsService: CartsService) {}
  ngOnInit() {
    this.getCartProducts();
    this.getTotalPrice();
  }
  getCartProducts() {
    if ('cart' in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem('cart')!);
    }
  }
  getTotalPrice() {
    if (this.cartProducts.length > 0) {
      this.totalPrice = 0;
      for (let i = 0; i < this.cartProducts.length; i++) {
        this.totalPrice +=
          this.cartProducts[i].item.price * this.cartProducts[i].quantity;
      }
    } else {
      this.totalPrice = 0;
    }
    this.getNumOfProducts();
  }
  incAmount(index: any) {
    this.cartProducts[index].quantity++;
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
    this.getTotalPrice();
  }
  decAmount(index: any) {
    this.cartProducts[index].quantity--;
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
    this.getTotalPrice();
  }
  changeAmount(event: any, index: number) {
    if (event.target.value > 5 || event.target.value < 0) {
      this.cartProducts[index].quantity = 5;
      alert('The maximum number available for this product is 5');
    } else {
      this.getTotalPrice();
      localStorage.setItem('cart', JSON.stringify(this.cartProducts));
    }
  }
  deleteProduct(index: any) {
    this.cartProducts.splice(index, 1);
    this.getTotalPrice();
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  }
  clearCart() {
    this.cartProducts = [];
    this.getTotalPrice();
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  }
  orderProducts() {
    let userID = 34;
    let date = new Date();
    let products: any[] = this.cartProducts.map((obj) => {
      return {
        productId: obj.item.id,
        quantity: obj.quantity,
      };
    });

    let Model = {
      userId: userID,
      date: date,
      products: products,
    };
    this.cartsService.addNewCart(Model).subscribe((res) => {
      this.isOrderSuccess = true;
    });
  }
  getNumOfProducts() {
    this.numOfProudcts = 0;
    for (let i = 0; i < this.cartProducts.length; i++) {
      this.numOfProudcts += this.cartProducts[i].quantity;
    }
  }
}
