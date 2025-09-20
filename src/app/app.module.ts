import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialDesignModule } from './material-design/material-design.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ExperiencePageModule } from './experience-page/experience-page.module';
import { LandingPageModule } from './landing-page/landing-page.module';
import { CvProjectsPageModule } from './cv-projects-page/cv-projects-page.module';
import { ProjectsTechModule } from './projects-tech/projects-tech.module';
import { MainpageComponent } from './mainpage/mainpage.component';
import { PortfolioWebComponent } from './project-pages/portfolio-web/portfolio-web.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { TravelgoComponent } from './project-pages/travelgo/travelgo.component';
import { TravelgoFrontendComponent } from './project-pages/travelgo/travelgo-frontend/travelgo-frontend.component';
import { TravelgoAdminComponent } from './project-pages/travelgo/travelgo-admin/travelgo-admin.component';
import { TravelgoBackendComponent } from './project-pages/travelgo/travelgo-backend/travelgo-backend.component';
import { TravelgoDeploymentComponent } from './project-pages/travelgo/travelgo-deployment/travelgo-deployment.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ContactFormComponent } from './contact-page/contact-form/contact-form.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactInfoComponent } from './contact-page/contact-info/contact-info.component';
import { HrmsComponent } from './project-pages/hrms/hrms.component';
import { VideoComponent } from './project-pages/hrms/video/video.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { HrmsDesktopComponent } from './project-pages/hrms/hrms-desktop/hrms-desktop.component';
import { MoneyManagerComponent } from './project-pages/money-manager/money-manager.component';
import { BlogComponent } from './blog/blog.component';
import { BlogPreviewComponent } from './blog/blog-preview/blog-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainpageComponent,
    PortfolioWebComponent,
    TravelgoComponent,
    TravelgoFrontendComponent,
    TravelgoAdminComponent,
    TravelgoBackendComponent,
    TravelgoDeploymentComponent,
    ContactPageComponent,
    ContactFormComponent,
    ContactInfoComponent,
    HrmsComponent,
    VideoComponent,
    HrmsDesktopComponent,
    MoneyManagerComponent,
    BlogComponent,
    BlogPreviewComponent,
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
    NgImageSliderModule,
    ReactiveFormsModule,
    HttpClientModule,
    YouTubePlayerModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
