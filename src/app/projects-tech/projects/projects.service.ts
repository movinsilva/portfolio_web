import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor() { }

  getProjects() {
    return [
      {
        title: "Angular",
        name: "portfolio_web",
        description: "Portfolio website designed using angular, typescript",
        technology: "Typescript, HTML, CSS",
        link: "https://github.com/movinsilva/portfolio_web"
      },
      {
        title: "HTML CSS JS",
        name: "Company profile website",
        description: "Company profile website designed using HTML, CSS, JS",
        technology: "HTML, CSS, Javascript",
        link: "https://ecodeit.com"
      },
      {
        title: "Flutter",
        name: "money_manager",
        description: "Money management mobile app designed using flutter, SQFLite",
        technology: "Dart",
        link: "https://github.com/movinsilva/money_manager"
      }
    ]
  }
}
