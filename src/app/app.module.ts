import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login.component';
import { RegistroComponent } from './auth/registro.component';
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from './app-routing.module';
import { IndexComponent } from './index/index.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { CrearComponent } from './bodega/crear/crear.component';
import { interceptorProvider } from './interceptores/bodega-interceptor.service';
import { ListarBodegaComponent } from './bodega/listar/listar-bodega.component';
import { DetalleBodegaComponent } from './bodega/detalle-bodega/detalle-bodega.component';
import { ActualizarBodegaComponent } from './bodega/actualizar-bodega/actualizar-bodega.component';
import { ListarClienteComponent } from './cliente/listar-cliente/listar-cliente.component';
import { CrearClienteComponent } from './cliente/crear-cliente/crear-cliente.component';
import { ActualizarClienteComponent } from './cliente/actualizar-cliente/actualizar-cliente.component';
import { DetalleClienteComponent } from './cliente/detalle-cliente/detalle-cliente.component';
import { CrearPuertoComponent } from './puerto/crear-puerto/crear-puerto.component';
import { ActualizarPuertoComponent } from './puerto/actualizar-puerto/actualizar-puerto.component';
import { DetallePuertoComponent } from './puerto/detalle-puerto/detalle-puerto.component';
import { ListarPuertoComponent } from './puerto/listar-puerto/listar-puerto.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    MenuComponent,
    IndexComponent,
    ListarBodegaComponent,
    CrearComponent,
    DetalleBodegaComponent,
    ActualizarBodegaComponent,
    ListarClienteComponent,
    CrearClienteComponent,
    ActualizarClienteComponent,
    DetalleClienteComponent,
    CrearPuertoComponent,
    ActualizarPuertoComponent,
    DetallePuertoComponent,
    ListarPuertoComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
