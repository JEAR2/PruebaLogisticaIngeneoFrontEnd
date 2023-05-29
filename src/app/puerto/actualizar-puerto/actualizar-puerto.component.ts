import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Puerto } from 'src/app/modelos/Entidades/puerto';
import { PuertoService } from 'src/app/servicios/puerto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-puerto',
  templateUrl: './actualizar-puerto.component.html',
  styleUrls: ['./actualizar-puerto.component.css']
})
export class ActualizarPuertoComponent implements OnInit {
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
          this.router.navigate(['/lista-puertos']);
        }
      }
    );
  }
  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.puertoService.update(id, this.puerto!).subscribe(
      data => {
        Swal.fire(
          'Actualizado!',
          'Ha sido actualizado el puerto con id: '+id,
          'success'
        )
        this.router.navigate(['/lista-puertos']);
      },
      err => {
        Swal.fire('Ha ocurrido un error')
        // this.router.navigate(['/']);
      }
    );
  }
  
}

