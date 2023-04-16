import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './Pages/about/about.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { ServicesComponent } from './Components/services/services.component';
import { HomeComponent } from './Pages/home/home.component';
import { ServicesPageComponent } from './Pages/services-page/services-page.component';
import { ClientsComponent } from './Components/clients/clients.component';
import { CandidateProfilesComponent } from './Components/candidate-profiles/candidate-profiles.component';
import { TeamComponent } from './Pages/team/team.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { RecuitingComponent } from './Pages/recuiting/recuiting.component';
import { GetStartedComponent } from './Pages/get-started/get-started.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { FooterComponent } from './Components/footer/footer.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { ConnectComponent } from './Components/connect/connect.component';
import { WhatWeDoComponent } from './Components/what-we-do/what-we-do.component';
import { WhoWeAreComponent } from './Components/who-we-are/who-we-are.component';

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
    GetStartedComponent,
    FooterComponent,
    NavbarComponent,
    ConnectComponent,
    WhatWeDoComponent,
    WhoWeAreComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
