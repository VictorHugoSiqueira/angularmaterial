import { DashboardComponent } from './dashboard.component';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { InicioComponent } from './inicio/inicio.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ReportsComponent } from './reports/reports.component';
import { CriarUsuarioComponent } from './usuarios/criar-usuario/criar-usuario.component';


@NgModule({
  declarations: [
    InicioComponent,
    NavbarComponent,
    UsuariosComponent,
    ReportsComponent,
    DashboardComponent,
    CriarUsuarioComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule    ]
})
export class DashboardModule { }
