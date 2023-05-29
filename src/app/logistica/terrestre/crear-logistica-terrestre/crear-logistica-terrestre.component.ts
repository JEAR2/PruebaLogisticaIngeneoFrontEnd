import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  selector: 'app-crear-logistica-terrestre',
  templateUrl: './crear-logistica-terrestre.component.html',
  styleUrls: ['./crear-logistica-terrestre.component.css']
})
export class CrearLogisticaTerrestreComponent implements OnInit{
  id:number=0;
  placaVehiculo:string="";
  numeroGuia:string="";
  cantidadProducto:number=0;
  fechaRegistro!: Date;
  fechaEntrega!:Date;
  precioEnvio!:number;
  cliente!:number;
  bodega!:number;
  tipoProducto!:number;
  selectCliente:Cliente[]=[];
  selectBodega:Bodega[]=[];
  selectTipoProducto:TipoProducto[]=[];
  constructor(
    private logisticaTerrestreService:LogisticaTerrestreService,
    private clienteService:ClienteService,
    private bodegaService:BodegaService,
    private tipoProductoService:TipoProductoService,
    private router: Router
    ){}
  
  ngOnInit(): void {
    this.cargarClientes()
    this.cargarBodegas()
    this.cargarTipoProducto()
  }
  onCreate(): void {
   
    const logistica = new LogisticaTerrestre(this.placaVehiculo, this.numeroGuia,this.cantidadProducto,
      this.fechaRegistro,this.fechaEntrega,this.precioEnvio,this.selectCliente[this.cliente], 
      this.selectBodega[this.bodega],this.selectTipoProducto[this.tipoProducto]);
      console.log(logistica.cliente.nombre);
    this.logisticaTerrestreService.save(logistica).subscribe(
      {
        next:data => {
          Swal.fire(
            'Creada!',
            'Ha sido creado la logistica terrestre correctamente : ',
            'success'
          )
          this.router.navigate(['/lista-logistica-terrestre']);
        },
        error:err => {
          Swal.fire('Ha ocurrido un error '+err.error)
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


