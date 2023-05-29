import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/modelos/Entidades/Cliente';
import { ClienteService } from 'src/app/servicios/cliente.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalle-cliente',
  templateUrl: './detalle-cliente.component.html',
  styleUrls: ['./detalle-cliente.component.css']
})
export class DetalleClienteComponent implements OnInit {
  cliente:Cliente | undefined;
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
          this.volver();
        }
      }
    );
  }
  volver(): void {
    this.router.navigate(['/lista-clientes']);
  }

}
