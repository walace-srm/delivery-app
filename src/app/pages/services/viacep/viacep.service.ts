import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ViacepService {
  url = 'viacep.com.br/ws/01001000/json';

  constructor() {}

  getCep(cep: string) {
    return fetch(`https://viacep.com.br/ws/${cep}/json`)
      .then((response) => response.json())
      .then((data) => {
        return data;
      });
  }
  // getCep(cep: string) {
  //   return fetch(`https://viacep.com.br/ws/${cep}/json`)
  //     .then(response => response.json())
  //     .then(data => {
  //       return data;
  //     });
  // }
}
