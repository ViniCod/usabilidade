import { Component/*, EventEmitter, Output*/ } from '@angular/core';
import { NgForm } from '@angular/forms';

// import { Cliente } from '../cliente.model';
import { ClienteService } from '../cliente.services';

@Component ({
  selector: 'app-cliente-inserir',
  templateUrl: './cliente-inserir.component.html',
  styleUrls: ['./cliente-inserir.component.css'],
})

export class ClienteInserirComponent {

  // @Output() clienteAdicionado = new EventEmitter <Cliente>();

  constructor(public clienteService: ClienteService) {}

  onAdicionarCliente(form: NgForm) {

    if (form.invalid) {
      return;
    }

    this.clienteService.adicionarClientes(
      form.value.nome,
      form.value.telefone,
      form.value.email
    );

    form.resetForm();

    /*const cliente: Cliente = {
      nome: form.value.nome,
      telefone: form.value.telefone,
      email: form.value.email
    }*/

    // this.clienteAdicionado.emit(cliente);
  }
}
