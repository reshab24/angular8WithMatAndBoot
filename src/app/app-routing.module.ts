import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { EventCardDetailComponent } from './components/event-card-detail/event-card-detail.component';
import { DempoHomePageComponent } from './pages/dempo-home-page/dempo-home-page.component';

const routes: Routes = [
  { path: '',   redirectTo: '/dempoHome', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent},
  { path: 'dempoHome', component: DempoHomePageComponent},
  { path: 'event/:id', component: EventCardDetailComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
