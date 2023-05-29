import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Puerto } from 'src/app/modelos/Entidades/puerto';
import { PuertoService } from 'src/app/servicios/puerto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-puerto',
  templateUrl: './crear-puerto.component.html',
  styleUrls: ['./crear-puerto.component.css']
})
export class CrearPuertoComponent implements OnInit{
  nombre:string="";
  telefono:string="";
  ubicacion:string="";
  constructor(private puertoService:PuertoService,private router: Router){}
  ngOnInit(): void {
    
  }
  onCreate(): void {
    const puerto = new Puerto(this.nombre, this.telefono,this.ubicacion);
    this.puertoService.save(puerto).subscribe(
      {
        next:data => {
          Swal.fire(
            'Creado!',
            'Ha sido creado el puerto : '+puerto.nombre,
            'success'
          )
          this.router.navigate(['/lista-puertos']);
        },
        error:err => {
          Swal.fire('Ha ocurrido un error')
          // this.router.navigate(['/']);
        }
      }
    );
  }

}

