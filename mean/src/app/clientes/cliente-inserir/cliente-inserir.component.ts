import { Component } from '@angular/core';

@Component ({
  selector: 'app-cliente-inserir',
  templateUrl: './cliente-inserir.component.html',
  styleUrls: ['./cliente-inserir.component.css'],
})

export class ClienteInserirComponent {

  nome: string;
  telefone: string;
  email: string;

  onAdicionarCliente() {
    console.log('Inserindo cliente');
  }
}
