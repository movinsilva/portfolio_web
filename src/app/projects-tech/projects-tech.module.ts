import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects/projects.component';
import { TechComponent } from './tech/tech.component';
import { ProjectsTechComponent } from './projects-tech.component';
import { SingleProjectComponent } from './projects/single-project/single-project.component';



@NgModule({
  declarations: [ProjectsComponent, TechComponent, ProjectsTechComponent, SingleProjectComponent],
  imports: [
    CommonModule
  ],
  exports: [ProjectsTechComponent]
})
export class ProjectsTechModule { }
