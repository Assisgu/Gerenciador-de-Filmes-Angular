import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmeComponent } from './views/filme/filme.component';
import { GeneroComponent } from './views/genero/genero.component';

const routes: Routes = [
  { path: 'filme', component: FilmeComponent },
  { path: 'genero', component: GeneroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
