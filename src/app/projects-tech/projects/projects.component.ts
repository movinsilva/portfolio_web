import { Component } from '@angular/core';
import { ProjectsService } from './projects.service';
import { Project } from '../../types/Project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  projects: Project[] = [];

  constructor(private projectsService: ProjectsService) {}

  ngOnInit() {
    // Get all projects
    this.projects = this.projectsService.getAllProjects();
  }
}
