import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  selector: 'app-crear-logistica-maritima',
  templateUrl: './crear-logistica-maritima.component.html',
  styleUrls: ['./crear-logistica-maritima.component.css']
})
export class CrearLogisticaMaritimaComponent implements OnInit{
  id:number=0;
  numeroFlota:string="";
  numeroGuia:string="";
  cantidadProducto:number=0;
  fechaRegistro!: Date;
  fechaEntrega!:Date;
  precioEnvio!:number;
  cliente!:number;
  puerto!:number;
  tipoProducto!:number;
  selectCliente:Cliente[]=[];
  selectPuerto:Puerto[]=[];
  selectTipoProducto:TipoProducto[]=[];
  constructor(
    private logisticaMaritimaService:LogisticaMaritimaService,
    private clienteService:ClienteService,
    private puertoService:PuertoService,
    private tipoProductoService:TipoProductoService,
    private router: Router
    ){}
  
  ngOnInit(): void {
    this.cargarClientes()
    this.cargarPuertos()
    this.cargarTipoProducto()
  }
  onCreate(): void {
   
    const logistica = new LogisticaMaritima(this.numeroFlota, this.numeroGuia,this.cantidadProducto,
      this.fechaRegistro,this.fechaEntrega,this.precioEnvio,this.selectCliente[this.cliente], 
      this.selectPuerto[this.puerto],this.selectTipoProducto[this.tipoProducto]);
    this.logisticaMaritimaService.save(logistica).subscribe(
      {
        next:data => {
          Swal.fire(
            'Creada!',
            'Ha sido creado la logistica maritima correctamente : ',
            'success'
          )
          this.router.navigate(['/lista-logistica-maritima']);
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


