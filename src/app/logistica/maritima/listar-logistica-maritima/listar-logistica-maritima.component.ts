import { Component, OnInit } from '@angular/core';
import { LogisticaMaritima } from 'src/app/modelos/Entidades/logisticaMaritima';
import { LogisticaMaritimaService } from 'src/app/servicios/logistica-maritima.service';
import { TokenService } from 'src/app/servicios/token.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar-logistica-maritima',
  templateUrl: './listar-logistica-maritima.component.html',
  styleUrls: ['./listar-logistica-maritima.component.css']
})
export class ListarLogisticaMaritimaComponent implements OnInit{
  logisticaMaritima:LogisticaMaritima[]=[];
  roles: string[] = [];
  isAdmin = false;
  constructor(private logisticaMaritimaService:LogisticaMaritimaService,private tokenService: TokenService){}

  ngOnInit(): void {
    this.cargarLogisticaMaritima();
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if (JSON.parse(JSON.stringify(rol))['authority'] === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
  }

  cargarLogisticaMaritima(): void {
    this.logisticaMaritimaService.lista().subscribe(
      {
        next:data => {
          console.log(data);
          this.logisticaMaritima = data;
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
      text: "logistica Maritima con id: "+id,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.logisticaMaritimaService.delete(id).subscribe(
          {
            next:data => {
              Swal.fire(
                'ELiminada!',
                'Ha sido eliminada la logistica Maritima con id: '+id,
                'success'
              )
              this.cargarLogisticaMaritima();
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
              