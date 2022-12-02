import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioRegistroComponent } from './formulario-registro/formulario-registro.component';
import { ComprobanteRegistroComponent } from './comprobante-registro/comprobante-registro.component';
import { PaginaprincipalComponent } from './paginaprincipal/paginaprincipal.component';
import { MenuComponent } from './menu/menu.component';
import { CarouselComponent } from './carousel/carousel.component';
import { PrinDerechoComponent } from './prin-derecho/prin-derecho.component';
import { PrinIzquierdoComponent } from './prin-izquierdo/prin-izquierdo.component';
import { FooterComponent } from './footer/footer.component';
import { ContenidoComponent } from './contenido/contenido.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioRegistroComponent,
    ComprobanteRegistroComponent,
    PaginaprincipalComponent,
    MenuComponent,
    CarouselComponent,
    PrinDerechoComponent,
    PrinIzquierdoComponent,
    FooterComponent,
    ContenidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
