import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Pages/about/about.component';
import { ServicesPageComponent } from './Pages/services-page/services-page.component';
import { HomeComponent } from './Pages/home/home.component';
import { TeamComponent } from './Pages/team/team.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { RecuitingComponent } from './Pages/recuiting/recuiting.component';
import { GetStartedComponent } from './Pages/get-started/get-started.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'services',
    component: ServicesPageComponent,
  },
  {
    path: 'team',
    component: TeamComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'recruiting',
    component: RecuitingComponent,
  },
  {
    path: 'get-started',
    component: GetStartedComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
