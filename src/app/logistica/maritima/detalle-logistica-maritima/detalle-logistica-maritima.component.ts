import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LogisticaMaritima } from 'src/app/modelos/Entidades/logisticaMaritima';
import { LogisticaMaritimaService } from 'src/app/servicios/logistica-maritima.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalle-logistica-maritima',
  templateUrl: './detalle-logistica-maritima.component.html',
  styleUrls: ['./detalle-logistica-maritima.component.css']
})
export class DetalleLogisticaMaritimaComponent implements OnInit {

  logisticaMaritima:LogisticaMaritima | undefined;
  constructor(
    private logisticaMaritimaService:LogisticaMaritimaService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ){}
  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.logisticaMaritimaService.detail(id).subscribe(
      {
        next:data => {
          this.logisticaMaritima = data;
        },
        error:err => {
          Swal.fire('Ha ocurrido un error: '+err.error)
          this.volver();
        }
      }
    );
  }
  volver(): void {
    this.router.navigate(['/lista-logistica-maritima']);
  }

}

