import { Cliente } from './cliente.model';

import { Subject } from 'rxjs';

export class ClienteService {

  private clientes: Cliente[] = []
  private listaClientesAtualizada = new Subject<Cliente[]>()

  getClientes(): Cliente[] {
    return [...this.clientes];
  }

  adicionarClientes(nome: string, telefone: string, email: string) {

    const cliente: Cliente = {
      nome: nome,
      telefone: telefone,
      email: email
    }

    this.clientes.push(cliente)

    this.listaClientesAtualizada.next([...this.clientes])

  }

  getListaClientesAtualizadaObservable() {
    return this.listaClientesAtualizada.asObservable()
  }

}
