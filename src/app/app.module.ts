import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoysComponent } from './boys/boys.component';
import { GirlsComponent } from './girls/girls.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { AccesoriesComponent } from './accesories/accesories.component';
import { HomeComponent } from './home/home.component';
import { FourZeroFourComponent } from './four-zero-four/four-zero-four.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    BoysComponent,
    GirlsComponent,
    MenComponent,
    WomenComponent,
    AccesoriesComponent,
    HomeComponent,
    FourZeroFourComponent,
    ShoppingCartComponent,
    LoginComponent,
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
