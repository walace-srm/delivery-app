import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { PedidoService } from '../../services/pedido/pedido.service';

@Component({
  selector: 'app-product-details',
  // standalone: true,
  // imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent {
  pizza: any;
  bebidas: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private pedidoService: PedidoService,
    private dialog: MatDialog
  ) {}

  addPizzaPedido(id: number) {
    this.pedidoService.getDetailsValues(this.data.name, this.data.price);
    this.pedidoService.openSnackBar('Pizza adicionada!');
    this.dialog.closeAll();
  }
}
