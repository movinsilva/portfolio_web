import { Component } from '@angular/core';

@Component({
  selector: 'app-tech-grid',
  templateUrl: './tech-grid.component.html',
  styleUrls: ['./tech-grid.component.css']
})
export class TechGridComponent {

  path: string = "../../../../assets/tech/"
  extension: string = ".png"
  logos1: string[] = [
    "./assets/tech/java.png",
    "./assets/tech/python.png",
    "./assets/tech/c-sharp.png",
    "./assets/tech/c.png",
    "./assets/tech/js.png",
      "./assets/tech/ts.png",
      "./assets/tech/dart.png",
  ]

    logos2: string[] = [
      "./assets/tech/html.png",
      "./assets/tech/css.png",
      "./assets/tech/sass.png",
      "./assets/tech/mui.png",
      "./assets/tech/jest.png",
      "./assets/tech/swagger.png",
      "./assets/tech/vite.png",
      
    ]

    logos3: string[] = [
      "./assets/tech/flutter.png",
      "./assets/tech/wordpress.png",
      "./assets/tech/linux.png",
      "./assets/tech/ubuntu.png",
      "./assets/tech/android.png",
      "./assets/tech/windows.png",
      "./assets/tech/node.png"
    ]

    logos4: string[] = [
      "./assets/tech/angular.png",
      "./assets/tech/react.png",
      "./assets/tech/redux.png",
      "./assets/tech/netcore.png",
      "./assets/tech/mysql.png",
      "./assets/tech/postgresql.svg",
      "./assets/tech/sqlite.png"
    ]

    logos5: string[] = [
      "./assets/tech/docker.png",
      "./assets/tech/nginx.webp",
      "./assets/tech/aws.png",
      "./assets/tech/googlecloud.png",
      "./assets/tech/digitalocean.png",
      "./assets/tech/github.png",
      "./assets/tech/github-actions.png",
      
    ]

}
