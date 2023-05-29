import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bodega } from 'src/app/modelos/Entidades/bodega';
import { BodegaService } from 'src/app/servicios/bodega.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit{
  nombre:string="";
  telefono:string="";
  ubicacion:string="";
  constructor(private bodegaService:BodegaService,private router: Router){}
  ngOnInit(): void {
    
  }
  onCreate(): void {
    const bodega = new Bodega(this.nombre, this.telefono,this.ubicacion);
    this.bodegaService.save(bodega).subscribe(
      {
        next:data => {
          Swal.fire(
            'Creada!',
            'Ha sido creada la bodega : '+bodega.nombre,
            'success'
          )
          this.router.navigate(['/lista']);
        },
        error:err => {
          Swal.fire('Ha ocurrido un error')
          // this.router.navigate(['/']);
        }
      }
    );
  }

}
