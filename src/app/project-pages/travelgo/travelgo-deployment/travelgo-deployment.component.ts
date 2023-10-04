import { Component } from '@angular/core';

@Component({
  selector: 'app-travelgo-deployment',
  templateUrl: './travelgo-deployment.component.html',
  styleUrls: ['./travelgo-deployment.component.css']
})
export class TravelgoDeploymentComponent {
  images: string[] = [
    './assets/tech/java.png',
    './assets/tech/python.png',
    './assets/tech/c.png',
    // Add more image URLs as needed
  ];


  logos1: string[] = [
    './assets/tech/aws.png',
    './assets/tech/linux.png',
    './assets/tech/docker.png',
    './assets/tech/github.png',
    './assets/tech/github-actions.png',
    './assets/tech/nginx.webp',
  ];
}
