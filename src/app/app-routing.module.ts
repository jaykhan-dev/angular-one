import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ServicesPageComponent } from './services-page/services-page.component';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';
import { RecuitingComponent } from './recuiting/recuiting.component';
import { GetStartedComponent } from './get-started/get-started.component';

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
