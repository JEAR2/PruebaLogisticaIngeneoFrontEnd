import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/modelos/Entidades/Cliente';
import { ClienteService } from 'src/app/servicios/cliente.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent implements OnInit{
  nombre:string="";
  identificacion:number=0;
  telefono:string="";
  sexo:string="";
  correo:string="";
  selectSexo:string[]=["M","F"];    

  constructor(private clienteService:ClienteService,private router: Router){}
  ngOnInit(): void {
    
  }
  onCreate(): void {
    const cliente = new Cliente(this.identificacion,this.nombre, this.telefono,this.sexo,this.correo);
    this.clienteService.save(cliente).subscribe(
      {
        next:data => {
          Swal.fire(
            'Cread!',
            'Ha sido creada el cliente : '+cliente.nombre,
            'success'
          )
          this.router.navigate(['/lista-clientes']);
        },
        error:err => {
          Swal.fire('Ha ocurrido un error')
          // this.router.navigate(['/']);
        }
      }
    );
  }

}
