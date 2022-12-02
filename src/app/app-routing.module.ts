import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailPokComponent } from './components/detail-pok/detail-pok.component';
import { SearchPokComponent } from './components/search-pok/search-pok.component';

const routes: Routes = [
  {path: 'home', component: SearchPokComponent  },
  {path: 'pokeDetail/:id', component: DetailPokComponent },
  {path: '', pathMatch: 'full', redirectTo:'home' },
  {path: '**', pathMatch: 'full', redirectTo:'home' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
