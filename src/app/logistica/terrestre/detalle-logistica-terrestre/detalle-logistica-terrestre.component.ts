import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LogisticaTerrestre } from 'src/app/modelos/Entidades/logisticaTerrestre';
import { LogisticaTerrestreService } from 'src/app/servicios/logistica-terrestre.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalle-logistica-terrestre',
  templateUrl: './detalle-logistica-terrestre.component.html',
  styleUrls: ['./detalle-logistica-terrestre.component.css']
})
export class DetalleLogisticaTerrestreComponent implements OnInit {

  logisticaTerrestre:LogisticaTerrestre | undefined;
  constructor(
    private logisticaTerrestreService:LogisticaTerrestreService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ){}
  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.logisticaTerrestreService.detail(id).subscribe(
      {
        next:data => {
          this.logisticaTerrestre = data;
        },
        error:err => {
          Swal.fire('Ha ocurrido un error')
          this.volver();
        }
      }
    );
  }
  volver(): void {
    this.router.navigate(['/lista-logistica-terrestre']);
  }

}
