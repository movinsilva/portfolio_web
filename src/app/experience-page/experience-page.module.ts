import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineComponent } from './timeline/timeline.component';
import { ExperiencePageComponent } from './experience-page.component';



@NgModule({
  declarations: [TimelineComponent, ExperiencePageComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ExperiencePageComponent
  ]
})
export class ExperiencePageModule { }
