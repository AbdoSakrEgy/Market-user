import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
})
export class SelectComponent {
  @Input() title: string = '';
  @Input() data: any[] = [];
  @Output() selectedValue = new EventEmitter<string>();

  constructor() {}
  ngOnInit() {}
  detectChanges(event: any) {
    this.selectedValue.emit(event);
  }
}
