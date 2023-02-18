import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroComponent } from './intro/intro.component';
import { LandingPageComponent } from './landing-page.component';



@NgModule({
  declarations: [IntroComponent, LandingPageComponent],
  imports: [
    CommonModule
  ],
  exports: [
    LandingPageComponent
  ]
})
export class LandingPageModule { }
