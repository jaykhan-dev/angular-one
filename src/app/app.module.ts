import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { ServicesComponent } from './services/services.component';
import { HomeComponent } from './home/home.component';
import { ServicesPageComponent } from './services-page/services-page.component';
import { ClientsComponent } from './clients/clients.component';
import { CandidateProfilesComponent } from './candidate-profiles/candidate-profiles.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';
import { RecuitingComponent } from './recuiting/recuiting.component';
import { GetStartedComponent } from './get-started/get-started.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ServicesComponent,
    HomeComponent,
    ServicesPageComponent,
    ClientsComponent,
    CandidateProfilesComponent,
    TeamComponent,
    ContactComponent,
    RecuitingComponent,
    GetStartedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
