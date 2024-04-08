import { Component } from "@angular/core";


@Component({
  selector: 'app-pages',
  template: `
    <app-header></app-header>
    <app-content></app-content>
    <app-footer></app-footer>
    <app-pedido></app-pedido>`,
})

export class PagesComponent { }