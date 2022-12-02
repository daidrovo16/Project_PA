import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioRegistroComponent } from './formulario-registro/formulario-registro.component';
import { ComprobanteRegistroComponent } from './comprobante-registro/comprobante-registro.component';
<<<<<<< Updated upstream
import { PaginaprincipalComponent } from './paginaprincipal/paginaprincipal.component';
import { MenuComponent } from './menu/menu.component';
=======
import { FormsModule } from '@angular/forms';
>>>>>>> Stashed changes

@NgModule({
  declarations: [
    AppComponent,
    FormularioRegistroComponent,
    ComprobanteRegistroComponent,
<<<<<<< Updated upstream
    PaginaprincipalComponent,
    MenuComponent
=======
    
>>>>>>> Stashed changes
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
