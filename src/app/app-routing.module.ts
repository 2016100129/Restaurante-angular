import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { MenuComponent } from './components/menu/menu.component';
import { NavmenuComponent } from './components/navmenu/navmenu.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { FormUserComponent } from './components/form-user/form-user.component';

const routes: Routes = [
  {path: "", redirectTo: "home", pathMatch: "full"},
  {path: "home", component: HomeComponent},
  {path: "about", component: AboutComponent},
  {path: "menu", component: MenuComponent},
  {path: "reservation", component: ReservationComponent},
  {path: "navmenu", component: NavmenuComponent},
  {path: "user", component: FormUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
