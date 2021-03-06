import { Component, OnInit } from '@angular/core';
import {Cliente} from './cliente';
import { ClienteService } from './cliente.service';
import Swal from 'sweetalert2';
import { tap } from 'rxjs/operators';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[];

  constructor(private clienteService: ClienteService) { }

  ngOnInit() {
    this.clienteService.getClientes().pipe(
      tap(clientes => {
        console.log('ClientesCiomponent: tap3');
        clientes.forEach( cliente => {
        console.log(cliente.nombre);
        });
      })
    ).subscribe(clientes => this.clientes = clientes);
  }

  delete(cliente: Cliente): void {
    Swal.fire({
      title: 'Estás seguro?',
      text: `¿Seguro que quiere eliminar al cliente ${cliente.nombre} ${cliente.apellido}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'cancelar',
      confirmButtonText: 'Si, eliminar'
    }).then((result) => {
      if (result.value) {
        this.clienteService.delete(cliente.id).subscribe(
          response => {
            this.clientes = this.clientes.filter(cli => cli !== cliente)
            Swal.fire(
              'Cliente eliminado!',
              `Cliente ${cliente.nombre} ha sido eliminado.`,
              'success'
            )
          }
        )
      }
    })
  }

}
