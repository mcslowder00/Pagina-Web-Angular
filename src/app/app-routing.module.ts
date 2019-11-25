import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoysComponent } from './boys/boys.component';
import { GirlsComponent } from './girls/girls.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { AccesoriesComponent } from './accesories/accesories.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  {path : 'Home' , component : HomeComponent},
  {path : 'Niños' , component : BoysComponent},
  {path : 'Niñas' , component : GirlsComponent},
  {path : 'Hombres' , component : MenComponent},
  {path : 'Muejres' , component : WomenComponent},
  {path : 'Accesorios' , component : AccesoriesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
