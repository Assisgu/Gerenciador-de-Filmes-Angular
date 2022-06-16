import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmeComponent } from './views/filme/filme.component';
import { GeneroComponent } from './views/genero/genero.component';
import { SobreComponent } from './views/sobre/sobre.component';

const routes: Routes = [
  { path: 'filme', component: FilmeComponent },
  { path: 'genero', component: GeneroComponent },
  { path: 'sobre', component: SobreComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
