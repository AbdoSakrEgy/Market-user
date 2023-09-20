import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SelectCategoryComponent } from './components/select-category/select-category.component';
import { SelectComponent } from './components/select/select.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    SpinnerComponent,
    SelectCategoryComponent,
    SelectComponent,
  ],
  imports: [CommonModule, RouterModule, FormsModule],
  exports: [HeaderComponent, SpinnerComponent, SelectComponent,RouterModule, FormsModule],
})
export class SharedModule {}
