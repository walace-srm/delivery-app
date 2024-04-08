import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../../services/produtos/produtos.service';
import { PedidoService } from '../../services/pedido/pedido.service';
import { Pizza } from '../../interfaces/pizza/pizza.model';
import { Bebida } from '../../interfaces/bebida/bebida.model';
import { MOCK } from './mock';
import { MatDialog } from '@angular/material/dialog';
import { ProductDetailsComponent } from '../product-details/product-details.component';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  pizzasArray: Pizza[] = [];
  bebidasArray: Bebida[] = [];

  constructor(
    private produtosService: ProdutosService,
    private pedidoService: PedidoService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    //this.getPizzas();
    //this.produtosService.create(MOCK);
    this.produtosService
      .getAll()
      .snapshotChanges()
      .subscribe((data: any) => {
        data.forEach((change: any) => {
          let item = change.payload.doc.data();
          this.pizzasArray = item.pizzas;
          this.bebidasArray = item.bebidas;
          console.log(change.payload.doc.data());
        });
      });
  }

  getPizzas() {
    this.produtosService.getProdutos().subscribe((data: any) => {
      this.pizzasArray = data.pizzas;
      this.bebidasArray = data.bebidas;
    });
  }

  addPizzaPedido(id: number) {
    this.pizzasArray.forEach((value) => {
      if (value.id === id) {
        this.pedidoService.getPedidoValues(value.name, value.price);
        this.pedidoService.openSnackBar('Pizza adicionada!');
      }
    });
  }

  addBebidaPedido(id: number) {
    this.bebidasArray.forEach((value) => {
      if (value.id === id) {
        this.pedidoService.getPedidoValues(
          `${value.name} ${value.volume}`,
          value.price
        );
        this.pedidoService.openSnackBar('Bebida adicionada!');
      }
    });
  }

  openDetails(pizza: any) {
    console.log(pizza);
    const dialogRef = this.dialog.open(ProductDetailsComponent, {
      data: pizza,
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }
}
