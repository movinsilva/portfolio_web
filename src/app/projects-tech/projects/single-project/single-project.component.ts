import { Component, Input } from '@angular/core';
import { Project } from '../../../types/Project';

@Component({
  selector: 'app-single-project',
  templateUrl: './single-project.component.html',
  styleUrls: ['./single-project.component.css'],
})
export class SingleProjectComponent {
  @Input() project: Project = {} as Project;
}
