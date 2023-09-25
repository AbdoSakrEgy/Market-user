import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  @Input() product!: Product;
  @Output() item = new EventEmitter();
  isAddButton2: boolean = false;
  amount: number = 1;

  ngOnInit() {}
  add() {
    if (this.amount > 0 && this.amount < 6) {
      this.item.emit({ item: this.product, quantity: this.amount });
    }
  }
}
