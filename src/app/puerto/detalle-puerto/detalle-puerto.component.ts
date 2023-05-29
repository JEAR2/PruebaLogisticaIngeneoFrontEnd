import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Puerto } from 'src/app/modelos/Entidades/puerto';
import { PuertoService } from 'src/app/servicios/puerto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalle-puerto',
  templateUrl: './detalle-puerto.component.html',
  styleUrls: ['./detalle-puerto.component.css']
})
export class DetallePuertoComponent implements OnInit {
  puerto:Puerto | undefined;
  constructor(
    private puertoService:PuertoService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ){}
  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.puertoService.detail(id).subscribe(
      {
        next:data => {
          this.puerto = data;
        },
        error:err => {
          Swal.fire('Ha ocurrido un error')
          this.volver();
        }
      }
    );
  }
  volver(): void {
    this.router.navigate(['/lista-puertos']);
  }

}

