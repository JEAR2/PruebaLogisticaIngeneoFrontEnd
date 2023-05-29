import { Component, OnInit } from '@angular/core';
import { Bodega } from 'src/app/modelos/Entidades/bodega';
import { BodegaService } from 'src/app/servicios/bodega.service';
import { TokenService } from 'src/app/servicios/token.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar-bodega',
  templateUrl: './listar-bodega.component.html',
  styleUrls: ['./listar-bodega.component.css']
})
export class ListarBodegaComponent implements OnInit{
  bodegas:Bodega[]=[];
  roles: string[] = [];
  isAdmin = false;
  constructor(private bodegaService:BodegaService,private tokenService: TokenService){}

  ngOnInit(): void {
    this.cargarBodegas();
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if (JSON.parse(JSON.stringify(rol))['authority'] === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
  }

  cargarBodegas(): void {
    this.bodegaService.lista().subscribe(
      {
        next:data => {
          console.log(data);
          this.bodegas = data;
        },
        error:err => {
          console.log("dasds");
          console.log(err);
        }
      }
    );
  }

  eliminar(id: number) {
    Swal.fire({
      title: 'Está seguro que desea eliminar la bodega?',
      text: "Bodega con id: "+id,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.bodegaService.delete(id).subscribe(
          {
            next:data => {
              Swal.fire(
                'ELiminada!',
                'Ha sido eliminada la bodega con id: '+id,
                'success'
              )
              this.cargarBodegas();
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
              