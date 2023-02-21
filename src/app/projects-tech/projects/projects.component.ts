import { Component } from '@angular/core';
import { ProjectsService } from './projects.service';
import { Project } from '../../types/Project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  constructor(private projectsService: ProjectsService) {}

  projects: Project[] = []

  ngOnInit() {
    this.projects = this.projectsService.getProjects()
  }

}
