import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialDesignModule } from './material-design/material-design.module';
import { NavbarComponent } from './navbar/navbar.component';
import { ExperiencePageModule } from './experience-page/experience-page.module';
import { LandingPageModule } from './landing-page/landing-page.module';
import { CvProjectsPageModule } from './cv-projects-page/cv-projects-page.module';
import { ProjectsTechComponent } from './projects-tech/projects-tech.component';
import { ProjectsTechModule } from './projects-tech/projects-tech.module';
import { MainpageComponent } from './mainpage/mainpage.component';
import { PortfolioWebComponent } from './project-pages/portfolio-web/portfolio-web.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { TravelgoComponent } from './project-pages/travelgo/travelgo.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainpageComponent,
    PortfolioWebComponent,
    TravelgoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialDesignModule,
    ExperiencePageModule,
    LandingPageModule,
    CvProjectsPageModule,
    ProjectsTechModule,
    NgImageSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
