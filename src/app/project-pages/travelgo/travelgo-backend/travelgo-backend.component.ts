import { Component } from '@angular/core';

@Component({
  selector: 'app-travelgo-backend',
  templateUrl: './travelgo-backend.component.html',
  styleUrls: ['./travelgo-backend.component.css']
})
export class TravelgoBackendComponent {
  images: string[] = [
    './assets/tech/java.png',
    './assets/tech/python.png',
    './assets/tech/c.png',
    // Add more image URLs as needed
  ];


  logos1: string[] = [
    './assets/tech/node.png',
    './assets/tech/js.png',
    './assets/tech/postgresql.svg',
    './assets/tech/jest.png',
    './assets/tech/swagger.png',
  ];
}
