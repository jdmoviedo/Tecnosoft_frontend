import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { MenuComponent } from './components/menu/menu.component';
import { IngresarComponent } from './components/ingresar/ingresar.component';
import { AnunciosComponent } from './components/anuncios/anuncios.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './auth.guard';

const routes: Routes = [] = [
  {path:'signin',component: SigninComponent},
  {path:'signup',component: SignupComponent},
  {path:'menu',component: MenuComponent,canActivate: [AuthGuard]},
  {path:'ingresar',component: IngresarComponent,canActivate: [AuthGuard]},
  {path:'anuncios',component: AnunciosComponent,canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
