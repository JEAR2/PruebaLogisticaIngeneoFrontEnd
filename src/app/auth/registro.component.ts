import { Component, OnInit } from '@angular/core';
import { NuevoUsuario } from '../modelos/nuevo-usuario';
import { TokenService } from '../servicios/token.service';
import { AuthService } from '../servicios/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {inject} from '@angular/core';
import { Cons } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent  implements OnInit{
  nuevoUsuario: NuevoUsuario | undefined;
  nombre: string="";
  nombreUsuario: string="";
  email: string="";
  password: string="";
  errMsj: string="";
  isLogged = false;
  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router,
    
  ){}
  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    }
  }
  onRegister(): void {
    this.nuevoUsuario = new NuevoUsuario(this.nombre, this.nombreUsuario, this.email, this.password);
    this.authService.nuevo(this.nuevoUsuario).subscribe(
      {
        next:data => {
          Swal.fire('Cuenta creada Con Exito')
  
          this.router.navigate(['/login']);
        },
        error:err => {
          this.errMsj = err.error.mensaje;
          Swal.fire('ha ocurrido un error, Intente nuevamente')
          // console.log(err.error.message);
        }
      }
    );
  }
  
}