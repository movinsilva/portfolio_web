import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects/projects.component';
import { TechComponent } from './tech/tech.component';
import { ProjectsTechComponent } from './projects-tech.component';
import { SingleProjectComponent } from './projects/single-project/single-project.component';
import { TechGridComponent } from './tech/tech-grid/tech-grid.component';



@NgModule({
  declarations: [ProjectsComponent, TechComponent, ProjectsTechComponent, SingleProjectComponent, TechGridComponent],
  imports: [
    CommonModule
  ],
  exports: [ProjectsTechComponent]
})
export class ProjectsTechModule { }
