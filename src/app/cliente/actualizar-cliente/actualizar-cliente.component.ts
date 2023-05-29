import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/modelos/Entidades/Cliente';
import { ClienteService } from 'src/app/servicios/cliente.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-cliente',
  templateUrl: './actualizar-cliente.component.html',
  styleUrls: ['./actualizar-cliente.component.css']
})
export class ActualizarClienteComponent implements OnInit {
  cliente:Cliente | undefined;
  selectSexo:string[]=["M","F"];
  constructor(
    private clienteService:ClienteService,
    private activatedRoute: ActivatedRoute,
    private router: Router
   ){}
  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.clienteService.detail(id).subscribe(
      {
        next:data => {
          this.cliente = data;
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
    this.clienteService.update(id, this.cliente!).subscribe(
      data => {
        Swal.fire(
          'Actualizado!',
          'Ha sido actualizado el cliente con id: '+id,
          'success'
        )
        this.router.navigate(['/lista-clientes']);
      },
      err => {
        Swal.fire('Ha ocurrido un error')
        // this.router.navigate(['/']);
      }
    );
  }
  
}
