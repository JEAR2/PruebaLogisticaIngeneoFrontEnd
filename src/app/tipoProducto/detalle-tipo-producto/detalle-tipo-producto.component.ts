import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoProducto } from 'src/app/modelos/Entidades/tipoProducto';
import { TipoProductoService } from 'src/app/servicios/tipo-producto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalle-tipo-producto',
  templateUrl: './detalle-tipo-producto.component.html',
  styleUrls: ['./detalle-tipo-producto.component.css']
})
export class DetalleTipoProductoComponent implements OnInit {
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
          this.volver();
        }
      }
    );
  }
  volver(): void {
    this.router.navigate(['/lista-tipo-producto']);
  }

}

