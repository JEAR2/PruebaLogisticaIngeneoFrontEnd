import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Bodega } from 'src/app/modelos/Entidades/bodega';
import { BodegaService } from 'src/app/servicios/bodega.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalle-bodega',
  templateUrl: './detalle-bodega.component.html',
  styleUrls: ['./detalle-bodega.component.css']
})
export class DetalleBodegaComponent implements OnInit {
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
          this.volver();
        }
      }
    );
  }
  volver(): void {
    this.router.navigate(['/lista']);
  }

}
