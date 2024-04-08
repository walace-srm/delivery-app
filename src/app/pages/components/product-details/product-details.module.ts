import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from './product-details.component';
import { MatDialogActions, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [ProductDetailsComponent],
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  exports: [ProductDetailsComponent],
})
export class ProductDetailsModule {}
