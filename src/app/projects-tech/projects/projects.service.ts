import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor() { }

  getProjects() {
    return [
      {
        title: "ReactJS NodeJS Express PostgreSQL",
        name: "Travel GO",
        description: "Train boking system with frontend, admin-panel, backend",
        technology: "Javascript, CSS, HTML",
        link: "/portfolio_web//#/travelgo",
        applyAnimation: true,
      },
      {
        title: "Angular",
        name: "portfolio_web",
        description: "Portfolio website designed using angular, typescript",
        technology: "Typescript, HTML, CSS",
        link: "/portfolio_web/#/portfolio-web",
        applyAnimation: true,
      },
      {
        title: "HTML CSS JS",
        name: "ECODE IT website",
        description: "Company profile website designed using HTML, CSS, JS",
        technology: "HTML, CSS, Javascript",
        link: "https://ecodeit.com",
        applyAnimation: false,
      }
    ]
  }

  getProjects2() {
    return [
      {
        title: ".Net-Core",
        name: "HRMS",
        description: "HRMS desktop application designed using .Net Core",
        technology: "C#",
        link: "/portfolio_web//#/hrms",
        applyAnimation: true,
      },
      {
        title: "HTML CSS JS",
        name: "IES website",
        description: "Company profile website designed using HTML, CSS, JS",
        technology: "HTML, CSS, Javascript",
        link: "https://ecodeit.com",
        applyAnimation: false,
      },
      {
        title: "Flutter",
        name: "money_manager",
        description: "Money management mobile app designed using flutter, SQFLite",
        technology: "Dart",
        link: "https://github.com/movinsilva/money_manager",
        applyAnimation: false,
      }
    ]
  }
}
