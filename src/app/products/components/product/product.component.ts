import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  @Input() product: any = {};
  @Output() item = new EventEmitter();
  isProductInCart: boolean = false;
  amount: number = 0;

  ngOnInit() {}
  add() {
    this.item.emit({ item: this.product, quantity: this.amount });
  }
}
