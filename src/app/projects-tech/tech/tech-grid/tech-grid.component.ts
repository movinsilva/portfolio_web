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
    "./assets/tech/c.png"
  ]

    logos2: string[] = [
      "./assets/tech/csharp.png",
      "./assets/tech/html.png",
      "./assets/tech/css.png",
      "./assets/tech/js.png"
    ]

    logos3: string[] = [
      "./assets/tech/flutter.png",
      "./assets/tech/dart.png",
      "./assets/tech/linux.png",
      "./assets/tech/ts.png",
      "./assets/tech/node.png"
    ]

    logos4: string[] = [
      "./assets/tech/angular.png",
      "./assets/tech/react.png",
      "./assets/tech/netcore.png",
      "./assets/tech/mysql.png"
    ]

    logos5: string[] = [
      "./assets/tech/googlecloud.png",
      "./assets/tech/digitalocean.png",
      "./assets/tech/sqlite.png"
    ]

}
