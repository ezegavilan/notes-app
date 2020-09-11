import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaNotasComponent } from './paginas/lista-notas/lista-notas.component';
import { MainLayoutComponent } from './paginas/main-layout/main-layout.component';

const routes: Routes = [
  { path: '', component: MainLayoutComponent, children: [
    { path: '', component: ListaNotasComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
