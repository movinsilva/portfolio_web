import { Injectable } from '@angular/core';
import { Project } from '../../types/Project';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  private projects: Project[] = [
    {
      title: 'JS TS React MUI',
      name: 'Web SDKs',
      description: 'A set of Javascript SDKs to embed authentication',
      technology: 'Typescript, React, OAuth',
      link: 'https://github.com/asgardeo/web-ui-sdks',
      applyAnimation: false,
    },
    {
      title: '.Net-Core',
      name: 'HRMS',
      description: 'HRMS desktop application designed using .Net Core',
      technology: 'C#',
      link: '/portfolio_web//#/hrms',
      applyAnimation: true,
    },
    {
      title: 'React Node Express PostgreSQL',
      name: 'Travel GO',
      description: 'Train boking system with frontend, admin-panel, backend',
      technology: 'Javascript, React, Material UI, Node, Express, PostgreSQL',
      link: '/portfolio_web//#/travelgo',
      applyAnimation: false,
    },
    {
      title: 'Angular',
      name: 'Portfolio Website',
      description: 'Portfolio website designed using angular, typescript',
      technology: 'Typescript, HTML, CSS',
      link: '/portfolio_web/#/portfolio-web',
      applyAnimation: false,
    },
    {
      title: 'HTML CSS JS',
      name: 'IES Website',
      description: 'Company profile website designed using HTML, CSS, JS',
      technology: 'HTML, CSS, Javascript',
      link: 'https://www.ies.lk/',
      applyAnimation: false,
    },
    {
      title: 'Flutter',
      name: 'Money Manager App',
      description:
        'Money management mobile app designed using flutter, SQFLite',
      technology: 'Dart',
      link: '/portfolio_web/#/money-manager',
      applyAnimation: false,
    },
  ];

  constructor() {}

  getAllProjects(): Project[] {
    return this.projects;
  }

  getProjectsByPage(page: number, itemsPerPage: number = 3): Project[] {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return this.projects.slice(startIndex, endIndex);
  }

  getTotalPages(itemsPerPage: number = 3): number {
    return Math.ceil(this.projects.length / itemsPerPage);
  }
}
