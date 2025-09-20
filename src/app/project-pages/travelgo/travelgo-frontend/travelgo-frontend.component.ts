import { Component } from '@angular/core';

@Component({
  selector: 'app-travelgo-frontend',
  templateUrl: './travelgo-frontend.component.html',
  styleUrls: ['./travelgo-frontend.component.css'],
})
export class TravelgoFrontendComponent {
  images: string[] = [
    './assets/tech/java.png',
    './assets/tech/python.png',
    './assets/tech/c.png',
    // Add more image URLs as needed
  ];

  imageObject: Array<object> = [
    {
      image: './assets/projects/travelgo/frontend/Home_Page.png',
      thumbImage: './assets/projects/travelgo/frontend/Home_Page.png',
      alt: 'alt of image',
      title: 'Home page',
      order: 1,
    },
    {
      image: './assets/projects/travelgo/frontend/Login.png', // Support base64 image
      thumbImage: './assets/projects/travelgo/frontend/Login.png', // Support base64 image
      title: 'Login page', //Optional: You can use this key if want to show image with title
      alt: 'Image alt', //Optional: You can use this key if want to show image with alt
      order: 2, //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
    },
    {
      image: './assets/projects/travelgo/frontend/Signup.png',
      thumbImage: './assets/projects/travelgo/frontend/Signup.png',
      title: 'Register page',
      alt: 'Image alt',
      order: 3,
    },
    {
      image: './assets/projects/travelgo/frontend/User Profile.png',
      thumbImage: './assets/projects/travelgo/frontend/User Profile.png',
      title: 'Profile page',
      alt: 'Image alt',
      order: 4,
    },
    {
      image: './assets/projects/travelgo/frontend/Train_Schedule.png',
      thumbImage: './assets/projects/travelgo/frontend/Train_Schedule.png',
      title: 'Train Schedule page',
      alt: 'Image alt',
      order: 5,
    },
  ];

  logos1: string[] = [
    './assets/tech/react.png',
    './assets/tech/html.png',
    './assets/tech/sass.png',
    './assets/tech/js.png',
    './assets/tech/bootstrap.png',
    './assets/tech/redux.png',
    './assets/tech/flutter.png',
    './assets/tech/dart.png',
    './assets/tech/vite.png',
  ];
}
