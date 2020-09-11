import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaNotasComponent } from './paginas/lista-notas/lista-notas.component';
import { MainLayoutComponent } from './paginas/main-layout/main-layout.component';
import { CardNotaComponent } from './components/card-nota/card-nota.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaNotasComponent,
    MainLayoutComponent,
    CardNotaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
