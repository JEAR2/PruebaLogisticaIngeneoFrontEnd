import { Component, OnInit } from '@angular/core';
import { LogisticaTerrestre } from 'src/app/modelos/Entidades/logisticaTerrestre';
import { LogisticaTerrestreService } from 'src/app/servicios/logistica-terrestre.service';
import { TokenService } from 'src/app/servicios/token.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar-logistica-terrestre',
  templateUrl: './listar-logistica-terrestre.component.html',
  styleUrls: ['./listar-logistica-terrestre.component.css']
})
export class ListarLogisticaTerrestreComponent implements OnInit{
  logisticaTerrestre:LogisticaTerrestre[]=[];
  roles: string[] = [];
  isAdmin = false;
  constructor(private logisticaTerrestreService:LogisticaTerrestreService,private tokenService: TokenService){}

  ngOnInit(): void {
    this.cargarLogisticaTerrestre();
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if (JSON.parse(JSON.stringify(rol))['authority'] === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
  }

  cargarLogisticaTerrestre(): void {
    this.logisticaTerrestreService.lista().subscribe(
      {
        next:data => {
          console.log(data);
          this.logisticaTerrestre = data;
        },
        error:err => {
          console.log(err);
        }
      }
    );
  }

  eliminar(id: number) {
    Swal.fire({
      title: 'Está seguro que desea eliminar la logistica?',
      text: "logistica terrestre con id: "+id,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.logisticaTerrestreService.delete(id).subscribe(
          {
            next:data => {
              Swal.fire(
                'ELiminada!',
                'Ha sido eliminada la logistica terrestre con id: '+id,
                'success'
              )
              this.cargarLogisticaTerrestre();
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
              