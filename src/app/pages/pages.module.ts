import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { ContentModule } from './components/content/content.module';
import { HeaderModule } from './components/header/header.module';
import { FooterModule } from './components/footer/footer.module';
import { PedidoModule } from './components/pedido/pedido.module';
import { ProductDetailsModule } from './components/product-details/product-details.module';

@NgModule({
  declarations: [PagesComponent],
  imports: [
    CommonModule,
    CommonModule,
    PagesRoutingModule,
    ContentModule,
    HeaderModule,
    FooterModule,
    PedidoModule,
    ProductDetailsModule,
  ],
  exports: [PagesComponent],
})
export class PagesModule {}
