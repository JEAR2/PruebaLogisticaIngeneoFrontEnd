import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TipoProducto } from 'src/app/modelos/Entidades/tipoProducto';
import { TipoProductoService } from 'src/app/servicios/tipo-producto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-tipo-producto',
  templateUrl: './crear-tipo-producto.component.html',
  styleUrls: ['./crear-tipo-producto.component.css']
})
export class CrearTipoProductoComponent implements OnInit{
  nombre:string="";
  descripcion:string="";
  constructor(private tipoProductoService:TipoProductoService,private router: Router){}
  ngOnInit(): void {
    
  }
  onCreate(): void {
    const tipoProducto = new TipoProducto(this.nombre, this.descripcion);
    this.tipoProductoService.save(tipoProducto).subscribe(
      {
        next:data => {
          Swal.fire(
            'Creado!',
            'Ha sido creado el tipo producto : '+tipoProducto.nombre,
            'success'
          )
          this.router.navigate(['/lista-tipo-producto']);
        },
        error:err => {
          Swal.fire('Ha ocurrido un error')
          // this.router.navigate(['/']);
        }
      }
    );
  }

}


