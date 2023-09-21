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
  amount: number = 0;

  ngOnInit() {}
  add() {
    this.item.emit({ item: this.product, quantity: this.amount });
  }
}
