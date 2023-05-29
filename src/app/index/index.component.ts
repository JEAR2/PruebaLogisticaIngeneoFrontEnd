import { Component } from '@angular/core';
import { TokenService } from '../servicios/token.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
  isLogged = false;
  nombreUsuario:string = '';
  constructor(private tokenService: TokenService) { }

  ngOnInit() {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.nombreUsuario = this.tokenService.getUserName()!;
    } else {
      this.isLogged = false;
      this.nombreUsuario = '';
    }
  }
}
