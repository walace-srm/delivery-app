import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PedidoService } from 'src/app/pages/services/pedido/pedido.service';
import { ViacepService } from 'src/app/pages/services/viacep/viacep.service';

@Component({
  selector: 'app-pedido-form',
  templateUrl: './pedido-form.component.html',
  styleUrls: ['./pedido-form.component.scss'],
})
export class PedidoFormComponent implements OnInit {
  form!: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private pedidoService: PedidoService,
    private viacepService: ViacepService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nome: ['', Validators.required],
      numero: ['', Validators.required],
      rua: ['', Validators.required],
      bairro: ['', Validators.required],
      complemento: [''],
      troco: [''],
      cep: [
        '',
        [Validators.required, Validators.minLength(8), Validators.maxLength(8)],
      ],
    });
  }

  getEndereco(cep: string): void {
    if (cep.length === 8) {
      this.viacepService.getCep(cep).then((data) => {
        if (data) {
          this.form.patchValue({
            rua: data.logradouro,
            bairro: data.bairro,
          });
        } else {
          this.form.patchValue({
            logradouro: '',
            bairro: '',
          });
        }
      });
    } else {
      this.form.patchValue({
        logradouro: '',
        bairro: '',
      });
    }
  }

  numericOnly(event: any): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  concluirPedido(): void {
    if (this.form.valid) {
      let texto = `*Nome:* ${this.form.value.nome};\n*CEP:* ${this.form.value.cep};\n*Bairro:* ${this.form.value.bairro};\n*Rua:* ${this.form.value.rua};\n*Número:* ${this.form.value.numero};\n*Complemento:* ${this.form.value.complemento};\n*Troco para:* ${this.form.value.troco}\n\n`;
      let textoURI = encodeURIComponent(texto);

      window.open(
        `https://api.whatsapp.com/send?phone=5521964353034&text=${textoURI}${this.pedidoService.pedidoURI}`
      );
      this.data.closeAll();
    } else {
      this.pedidoService.openSnackBar('Verifique os campos obrigatórios!');
    }
  }
}
