import { Component, OnInit } from '@angular/core';
import { TipoProducto } from 'src/app/modelos/Entidades/tipoProducto';
import { TipoProductoService } from 'src/app/servicios/tipo-producto.service';
import { TokenService } from 'src/app/servicios/token.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar-tipo-producto',
  templateUrl: './listar-tipo-producto.component.html',
  styleUrls: ['./listar-tipo-producto.component.css']
})
export class ListarTipoProductoComponent implements OnInit{
  tipoProductos:TipoProducto[]=[];
  roles: string[] = [];
  isAdmin = false;
  constructor(private tipoProductoervice:TipoProductoService,private tokenService: TokenService){}

  ngOnInit(): void {
    this.cargarTipoProducto();
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if (JSON.parse(JSON.stringify(rol))['authority'] === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
  }

  cargarTipoProducto(): void {
    this.tipoProductoervice.lista().subscribe(
      {
        next:data => {
          this.tipoProductos = data;
        },
        error:err => {
          console.log(err);
        }
      }
    );
  }

  eliminar(id: number) {
    Swal.fire({
      title: 'Está seguro que desea eliminar el tipo producto?',
      text: "tipo producto con id: "+id,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.tipoProductoervice.delete(id).subscribe(
          {
            next:data => {
              Swal.fire(
                'ELiminado!',
                'Ha sido eliminado el tipo prodcuto con id: '+id,
                'success'
              )
              this.cargarTipoProducto();
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
              