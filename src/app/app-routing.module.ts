import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login.component';
import { RegistroComponent } from './auth/registro.component';
import { IndexComponent } from './index/index.component';
import { ListarBodegaComponent } from './bodega/listar/listar-bodega.component';
import { CrearComponent } from './bodega/crear/crear.component';
import { DetalleBodegaComponent } from './bodega/detalle-bodega/detalle-bodega.component';
import { ActualizarBodegaComponent } from './bodega/actualizar-bodega/actualizar-bodega.component';
import { BodegaGuardService as guard } from './guards/bodega-guard.service';
import { ListarClienteComponent } from './cliente/listar-cliente/listar-cliente.component';
import { CrearClienteComponent } from './cliente/crear-cliente/crear-cliente.component';
import { DetalleClienteComponent } from './cliente/detalle-cliente/detalle-cliente.component';
import { ActualizarClienteComponent } from './cliente/actualizar-cliente/actualizar-cliente.component';

const routes: Routes = [
  {path:'', component:IndexComponent},
  {path:'lista', component:ListarBodegaComponent,canActivate: [guard], data: { expectedRol: ['admin', 'user'] } },
  {path:'lista-clientes', component:ListarClienteComponent,canActivate: [guard], data: { expectedRol: ['admin', 'user'] } },
  {path:'nueva-bodega',component:CrearComponent,canActivate: [guard], data: { expectedRol: ['admin'] }},
  {path:'nuevo-cliente',component:CrearClienteComponent,canActivate: [guard], data: { expectedRol: ['admin'] }},
  {path:'detalle-bodega/:id',component:DetalleBodegaComponent,canActivate: [guard], data: { expectedRol: ['admin', 'user'] }},
  {path:'detalle-cliente/:id',component:DetalleClienteComponent,canActivate: [guard], data: { expectedRol: ['admin', 'user'] }},
  {path:'actualizar-bodega/:id',component:ActualizarBodegaComponent,canActivate: [guard], data: { expectedRol: ['admin'] }},
  {path:'actualizar-cliente/:id',component:ActualizarClienteComponent,canActivate: [guard], data: { expectedRol: ['admin'] }},
  {path:'login', component:LoginComponent},
  {path:'registro', component:RegistroComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' }
]
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
