import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/modelos/Entidades/Cliente';
import { ClienteService } from 'src/app/servicios/cliente.service';
import { TokenService } from 'src/app/servicios/token.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.component.html',
  styleUrls: ['./listar-cliente.component.css']
})
export class ListarClienteComponent implements OnInit{
  clientes:Cliente[]=[];
  roles: string[] = [];
  isAdmin = false;
  constructor(private clienteService:ClienteService,private tokenService: TokenService){}

  ngOnInit(): void {
    this.cargarClientes();
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if (JSON.parse(JSON.stringify(rol))['authority'] === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
  }

  cargarClientes(): void {
    this.clienteService.lista().subscribe(
      {
        next:data => {
          console.log(data);
          this.clientes = data;
        },
        error:err => {
          console.log(err);
        }
      }
    );
  }

  eliminar(id: number) {
    Swal.fire({
      title: 'Está seguro que desea eliminar el cliente?',
      text: "Cliente con id: "+id,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.clienteService.delete(id).subscribe(
          {
            next:data => {
              Swal.fire(
                'ELiminad!',
                'Ha sido eliminad el cliente con id: '+id,
                'success'
              )
              this.cargarClientes();
            },
            error:err => {
              Swal.fire('Ha ocurrido un error'+err.error.mensaje)
            }
          }
        );
        
      }
    })
   
  }

}
              