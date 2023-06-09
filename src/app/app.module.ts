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
import { RecuitingComponent } from './Pages/recruiting/recruiting.component';
import { GetStartedComponent } from './Pages/get-started/get-started.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FooterComponent } from './Components/footer/footer.component';

import { ConnectComponent } from './Components/connect/connect.component';
import { WhatWeDoComponent } from './Components/what-we-do/what-we-do.component';
import { WhoWeAreComponent } from './Components/who-we-are/who-we-are.component';
import { ServicesDetailPageComponent } from './services-detail-page/services-detail-page.component';
import { ProfilesBlurbComponent } from './Components/profiles-blurb/profiles-blurb.component';
import { GridComponent } from './Components/grid/grid.component';
import { ServicesBlurbComponent } from './Components/services-blurb/services-blurb.component';
import { ServicesDetailedComponent } from './Pages/services-page/services-detailed/services-detailed.component';
import { LoadingComponent } from './Components/loading/loading.component';
import { ErrorComponent } from './Components/error/error.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatListModule } from '@angular/material/list';
import { ProfilesSlugComponent } from './Pages/profiles-slug/profiles-slug.component';

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
    ConnectComponent,
    WhatWeDoComponent,
    WhoWeAreComponent,
    ServicesDetailPageComponent,
    ProfilesBlurbComponent,
    GridComponent,
    ServicesBlurbComponent,
    ServicesDetailedComponent,
    LoadingComponent,
    ErrorComponent,
    MainNavComponent,
    ProfilesSlugComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatTabsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    LayoutModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
