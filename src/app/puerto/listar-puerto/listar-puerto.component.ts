import { Component, OnInit } from '@angular/core';
import { Puerto } from 'src/app/modelos/Entidades/puerto';
import { PuertoService } from 'src/app/servicios/puerto.service';
import { TokenService } from 'src/app/servicios/token.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar-puerto',
  templateUrl: './listar-puerto.component.html',
  styleUrls: ['./listar-puerto.component.css']
})
export class ListarPuertoComponent implements OnInit{
  puertos:Puerto[]=[];
  roles: string[] = [];
  isAdmin = false;
  constructor(private puertoService:PuertoService,private tokenService: TokenService){}

  ngOnInit(): void {
    this.cargarPuertos();
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if (JSON.parse(JSON.stringify(rol))['authority'] === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
  }

  cargarPuertos(): void {
    this.puertoService.lista().subscribe(
      {
        next:data => {
          console.log(data);
          this.puertos = data;
        },
        error:err => {
          console.log(err);
        }
      }
    );
  }

  eliminar(id: number) {
    Swal.fire({
      title: 'Está seguro que desea eliminar el puerto?',
      text: "puerto con id: "+id,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.puertoService.delete(id).subscribe(
          {
            next:data => {
              Swal.fire(
                'ELiminado!',
                'Ha sido eliminado el puerto con id: '+id,
                'success'
              )
              this.cargarPuertos();
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
              