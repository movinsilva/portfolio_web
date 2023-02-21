import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvComponent } from './cv/cv.component';
import { CvProjectsPageComponent } from './cv-projects-page.component';



@NgModule({
  declarations: [CvComponent, CvProjectsPageComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CvProjectsPageComponent
  ]
})
export class CvProjectsPageModule { }
