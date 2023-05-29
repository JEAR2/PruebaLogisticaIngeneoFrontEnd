import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/modelos/Entidades/Cliente';
import { LogisticaMaritima } from 'src/app/modelos/Entidades/logisticaMaritima';
import { Puerto } from 'src/app/modelos/Entidades/puerto';
import { TipoProducto } from 'src/app/modelos/Entidades/tipoProducto';
import { ClienteService } from 'src/app/servicios/cliente.service';
import { LogisticaMaritimaService } from 'src/app/servicios/logistica-maritima.service';
import { PuertoService } from 'src/app/servicios/puerto.service';
import { TipoProductoService } from 'src/app/servicios/tipo-producto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-logistica-maritima',
  templateUrl: './actualizar-logistica-maritima.component.html',
  styleUrls: ['./actualizar-logistica-maritima.component.css']
})
export class ActualizarLogisticaMaritimaComponent implements OnInit {
  logisticaMaritima:LogisticaMaritima | undefined;
  puerto!:number;
  cliente!:number;
  tipoProducto!:number;
  selectCliente:Cliente[]=[];
  selectPuerto:Puerto[]=[];
  selectTipoProducto:TipoProducto[]=[];
  constructor(
    private logisticaMaritimaService:LogisticaMaritimaService,
    private clienteService:ClienteService,
    private puertoService:PuertoService,
    private tipoProductoService:TipoProductoService,
    private activatedRoute: ActivatedRoute,
    private router: Router
   ){}
  ngOnInit(): void {
    this.cargarClientes()
    this.cargarPuertos()
    this.cargarTipoProducto()
    const id = this.activatedRoute.snapshot.params['id'];

    this.logisticaMaritimaService.detail(id).subscribe(
      {
        next:data => {
          
          this.logisticaMaritima = data;
        },
        error:err => {
          Swal.fire('Ha ocurrido un error: '+err.error)
          this.router.navigate(['/lista-logistica-maritima']);
        }
      }
    );
    
  }
  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.logisticaMaritima!.puerto = this.selectPuerto[this.puerto];
    this.logisticaMaritima!.cliente = this.selectCliente[this.cliente];
    this.logisticaMaritima!.tipoProducto = this.selectTipoProducto[this.tipoProducto];
    this.logisticaMaritimaService.update(id, this.logisticaMaritima!).subscribe(
      {
        next:data => {
          Swal.fire(
            'Actualizada!',
            'Ha sido actualizado la logistica terrestre con id: '+id,
            'success'
          )
          this.router.navigate(['/lista-logistica-maritima']);
        },
        error:err => {
          Swal.fire('Ha ocurrido un error: ',err.error)
          // this.router.navigate(['/']);
        }
      }
    );
  }
  cargarClientes(): void {
    this.clienteService.lista().subscribe(
      {
        next:data => {
          console.log(data);
          this.selectCliente = data;
        },
        error:err => {
          console.log(err);
        }
      }
    );
  }
  cargarPuertos(): void {
    this.puertoService.lista().subscribe(
      {
        next:data => {
          console.log(data);
          this.selectPuerto = data;
        },
        error:err => {
          console.log(err);
        }
      }
    );
  }
  cargarTipoProducto(): void {
    this.tipoProductoService.lista().subscribe(
      {
        next:data => {
          this.selectTipoProducto = data;
        },
        error:err => {
          console.log(err);
        }
      }
    );
  }

}

