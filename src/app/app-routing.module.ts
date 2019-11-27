import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoysComponent } from './boys/boys.component';
import { GirlsComponent } from './girls/girls.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { AccesoriesComponent } from './accesories/accesories.component';
import { HomeComponent } from './home/home.component';
import { FourZeroFourComponent } from './four-zero-four/four-zero-four.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [

  {path : '' , component : HomeComponent},
  {path : 'Home' , component : HomeComponent},
  {path : 'Boys' , component : BoysComponent},
  {path : 'Girls' , component : GirlsComponent},
  {path : 'Men' , component : MenComponent},
  {path : 'Women' , component : WomenComponent},
  {path : 'Accesories' , component : AccesoriesComponent},
  {path : 'shopingCart' , component : ShoppingCartComponent},
  {path : 'Login' , component : LoginComponent},
  {path : '**' , component: FourZeroFourComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
