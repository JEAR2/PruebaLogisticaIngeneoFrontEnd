import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/modelos/Entidades/Cliente';
import { Bodega } from 'src/app/modelos/Entidades/bodega';
import { LogisticaTerrestre } from 'src/app/modelos/Entidades/logisticaTerrestre';
import { TipoProducto } from 'src/app/modelos/Entidades/tipoProducto';
import { BodegaService } from 'src/app/servicios/bodega.service';
import { ClienteService } from 'src/app/servicios/cliente.service';
import { LogisticaTerrestreService } from 'src/app/servicios/logistica-terrestre.service';
import { TipoProductoService } from 'src/app/servicios/tipo-producto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-logistica-terrestre',
  templateUrl: './actualizar-logistica-terrestre.component.html',
  styleUrls: ['./actualizar-logistica-terrestre.component.css']
})
export class ActualizarLogisticaTerrestreComponent implements OnInit {
  logisticaTerrestre:LogisticaTerrestre | undefined;
  bodega!:number;
  cliente!:number;
  tipoProducto!:number;
  selectCliente:Cliente[]=[];
  selectBodega:Bodega[]=[];
  selectTipoProducto:TipoProducto[]=[];
  constructor(
    private logisticaTerrestreService:LogisticaTerrestreService,
    private clienteService:ClienteService,
    private bodegaService:BodegaService,
    private tipoProductoService:TipoProductoService,
    private activatedRoute: ActivatedRoute,
    private router: Router
   ){}
  ngOnInit(): void {
    this.cargarClientes()
    this.cargarBodegas()
    this.cargarTipoProducto()
    const id = this.activatedRoute.snapshot.params['id'];

    this.logisticaTerrestreService.detail(id).subscribe(
      {
        next:data => {
          
          this.logisticaTerrestre = data;
          console.log(this.bodega);
        },
        error:err => {
          Swal.fire('Ha ocurrido un error: '+err.error)
          this.router.navigate(['/lista-logistica-terrestre']);
        }
      }
    );
    
  }
  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.logisticaTerrestre!.bodega = this.selectBodega[this.bodega];
    this.logisticaTerrestre!.cliente = this.selectCliente[this.cliente];
    this.logisticaTerrestre!.tipoProducto = this.selectTipoProducto[this.tipoProducto];
    this.logisticaTerrestreService.update(id, this.logisticaTerrestre!).subscribe(
      {
        next:data => {
          Swal.fire(
            'Actualizada!',
            'Ha sido actualizado la logistica terrestre con id: '+id,
            'success'
          )
          this.router.navigate(['/lista-logistica-terrestre']);
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
  cargarBodegas(): void {
    this.bodegaService.lista().subscribe(
      {
        next:data => {
          console.log(data);
          this.selectBodega = data;
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

