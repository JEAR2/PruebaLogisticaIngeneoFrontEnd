import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoProducto } from 'src/app/modelos/Entidades/tipoProducto';
import { TipoProductoService } from 'src/app/servicios/tipo-producto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-tipo-producto',
  templateUrl: './actualizar-tipo-producto.component.html',
  styleUrls: ['./actualizar-tipo-producto.component.css']
})
export class ActualizarTipoProductoComponent implements OnInit {
  tipoProducto:TipoProducto | undefined;
  constructor(
    private tipoProductoService:TipoProductoService,
    private activatedRoute: ActivatedRoute,
    private router: Router
   ){}
  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.tipoProductoService.detail(id).subscribe(
      {
        next:data => {
          this.tipoProducto = data;
        },
        error:err => {
          Swal.fire('Ha ocurrido un error')
          this.router.navigate(['/lista-tipo-producto']);
        }
      }
    );
  }
  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.tipoProductoService.update(id, this.tipoProducto!).subscribe(
      data => {
        Swal.fire(
          'Actualizado!',
          'Ha sido actualizado el tipoProducto con id: '+id,
          'success'
        )
        this.router.navigate(['/lista-tipo-producto']);
      },
      err => {
        Swal.fire('Ha ocurrido un error')
        // this.router.navigate(['/']);
      }
    );
  }
  
}

