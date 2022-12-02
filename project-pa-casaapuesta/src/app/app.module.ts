import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioRegistroComponent } from './formulario-registro/formulario-registro.component';
import { ComprobanteRegistroComponent } from './comprobante-registro/comprobante-registro.component';
import { PaginaprincipalComponent } from './paginaprincipal/paginaprincipal.component';
import { MenuComponent } from './menu/menu.component';
import {  ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    FormularioRegistroComponent,
    ComprobanteRegistroComponent,
    PaginaprincipalComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
