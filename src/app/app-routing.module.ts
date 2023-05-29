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
import { ListarPuertoComponent } from './puerto/listar-puerto/listar-puerto.component';
import { CrearPuertoComponent } from './puerto/crear-puerto/crear-puerto.component';
import { DetallePuertoComponent } from './puerto/detalle-puerto/detalle-puerto.component';
import { ActualizarPuertoComponent } from './puerto/actualizar-puerto/actualizar-puerto.component';
import { ListarTipoProductoComponent } from './tipoProducto/listar-tipo-producto/listar-tipo-producto.component';
import { CrearTipoProductoComponent } from './tipoProducto/crear-tipo-producto/crear-tipo-producto.component';
import { DetalleTipoProductoComponent } from './tipoProducto/detalle-tipo-producto/detalle-tipo-producto.component';
import { ActualizarTipoProductoComponent } from './tipoProducto/actualizar-tipo-producto/actualizar-tipo-producto.component';
import { ListarLogisticaTerrestreComponent } from './logistica/terrestre/listar-logistica-terrestre/listar-logistica-terrestre.component';
import { CrearLogisticaTerrestreComponent } from './logistica/terrestre/crear-logistica-terrestre/crear-logistica-terrestre.component';
import { DetalleLogisticaTerrestreComponent } from './logistica/terrestre/detalle-logistica-terrestre/detalle-logistica-terrestre.component';
import { ActualizarLogisticaTerrestreComponent } from './logistica/terrestre/actualizar-logistica-terrestre/actualizar-logistica-terrestre.component';
import { CrearLogisticaMaritimaComponent } from './logistica/maritima/crear-logistica-maritima/crear-logistica-maritima.component';
import { ListarLogisticaMaritimaComponent } from './logistica/maritima/listar-logistica-maritima/listar-logistica-maritima.component';
import { DetalleLogisticaMaritimaComponent } from './logistica/maritima/detalle-logistica-maritima/detalle-logistica-maritima.component';
import { ActualizarLogisticaMaritimaComponent } from './logistica/maritima/actualizar-logistica-maritima/actualizar-logistica-maritima.component';

const routes: Routes = [
  {path:'', component:IndexComponent},
  {path:'lista', component:ListarBodegaComponent,canActivate: [guard], data: { expectedRol: ['admin', 'user'] } },
  {path:'lista-clientes', component:ListarClienteComponent,canActivate: [guard], data: { expectedRol: ['admin', 'user'] } },
  {path:'lista-puertos', component:ListarPuertoComponent,canActivate: [guard], data: { expectedRol: ['admin', 'user'] } },
  {path:'lista-tipo-producto', component:ListarTipoProductoComponent,canActivate: [guard], data: { expectedRol: ['admin', 'user'] } },
  {path:'lista-logistica-terrestre', component:ListarLogisticaTerrestreComponent,canActivate: [guard], data: { expectedRol: ['admin', 'user'] } },
  {path:'lista-logistica-maritima', component:ListarLogisticaMaritimaComponent,canActivate: [guard], data: { expectedRol: ['admin', 'user'] } },
  {path:'nueva-bodega',component:CrearComponent,canActivate: [guard], data: { expectedRol: ['admin'] }},
  {path:'nuevo-cliente',component:CrearClienteComponent,canActivate: [guard], data: { expectedRol: ['admin'] }},
  {path:'nuevo-puerto',component:CrearPuertoComponent,canActivate: [guard], data: { expectedRol: ['admin'] }},
  {path:'nuevo-tipo-producto',component:CrearTipoProductoComponent,canActivate: [guard], data: { expectedRol: ['admin'] }},
  {path:'nueva-logistica-terrestre',component:CrearLogisticaTerrestreComponent,canActivate: [guard], data: { expectedRol: ['admin'] }},
  {path:'nueva-logistica-maritima',component:CrearLogisticaMaritimaComponent,canActivate: [guard], data: { expectedRol: ['admin'] }},
  {path:'detalle-bodega/:id',component:DetalleBodegaComponent,canActivate: [guard], data: { expectedRol: ['admin', 'user'] }},
  {path:'detalle-cliente/:id',component:DetalleClienteComponent,canActivate: [guard], data: { expectedRol: ['admin', 'user'] }},
  {path:'detalle-puerto/:id',component:DetallePuertoComponent,canActivate: [guard], data: { expectedRol: ['admin', 'user'] }},
  {path:'detalle-tipo-producto/:id',component:DetalleTipoProductoComponent,canActivate: [guard], data: { expectedRol: ['admin', 'user'] }},
  {path:'detalle-logistica-terreste/:id',component:DetalleLogisticaTerrestreComponent,canActivate: [guard], data: { expectedRol: ['admin', 'user'] }},
  {path:'detalle-logistica-maritima/:id',component:DetalleLogisticaMaritimaComponent,canActivate: [guard], data: { expectedRol: ['admin', 'user'] }},
  {path:'actualizar-bodega/:id',component:ActualizarBodegaComponent,canActivate: [guard], data: { expectedRol: ['admin'] }},
  {path:'actualizar-cliente/:id',component:ActualizarClienteComponent,canActivate: [guard], data: { expectedRol: ['admin'] }},
  {path:'actualizar-puerto/:id',component:ActualizarPuertoComponent,canActivate: [guard], data: { expectedRol: ['admin'] }},
  {path:'actualizar-tipo-producto/:id',component:ActualizarTipoProductoComponent,canActivate: [guard], data: { expectedRol: ['admin'] }},
  {path:'actualizar-logistica-terrestre/:id',component:ActualizarLogisticaTerrestreComponent,canActivate: [guard], data: { expectedRol: ['admin'] }},
  {path:'actualizar-logistica-maritima/:id',component:ActualizarLogisticaMaritimaComponent,canActivate: [guard], data: { expectedRol: ['admin'] }},
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
