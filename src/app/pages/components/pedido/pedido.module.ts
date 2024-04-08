import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PedidoComponent } from './pedido.component';
import { PedidoDialogComponent } from './pedido-dialog/pedido-dialog.component';
import { PedidoFormComponent } from './pedido-form/pedido-form.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [PedidoComponent, PedidoDialogComponent, PedidoFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatDialogModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  exports: [PedidoComponent, PedidoDialogComponent, PedidoFormComponent],
})
export class PedidoModule {}
