import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Bodega } from 'src/app/modelos/Entidades/bodega';
import { BodegaService } from 'src/app/servicios/bodega.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-bodega',
  templateUrl: './actualizar-bodega.component.html',
  styleUrls: ['./actualizar-bodega.component.css']
})

export class ActualizarBodegaComponent implements OnInit {
  bodega:Bodega | undefined;
  constructor(
    private bodegaService:BodegaService,
    private activatedRoute: ActivatedRoute,
    private router: Router
   ){}
  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.bodegaService.detail(id).subscribe(
      {
        next:data => {
          this.bodega = data;
        },
        error:err => {
          Swal.fire('Ha ocurrido un error')
          this.router.navigate(['/lista']);
        }
      }
    );
  }
  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.bodegaService.update(id, this.bodega!).subscribe(
      data => {
        Swal.fire(
          'Actualizada!',
          'Ha sido actualizada la bodega con id: '+id,
          'success'
        )
        this.router.navigate(['/lista']);
      },
      err => {
        Swal.fire('Ha ocurrido un error')
        // this.router.navigate(['/']);
      }
    );
  }
  
}
