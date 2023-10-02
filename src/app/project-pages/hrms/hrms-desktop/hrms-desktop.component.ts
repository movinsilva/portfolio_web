import { Component } from '@angular/core';

@Component({
  selector: 'app-hrms-desktop',
  templateUrl: './hrms-desktop.component.html',
  styleUrls: ['./hrms-desktop.component.css']
})
export class HrmsDesktopComponent {
  images: string[] = [
    './assets/tech/java.png',
    './assets/tech/python.png',
    './assets/tech/c.png',
    // Add more image URLs as needed
  ];

  imageObject: Array<object> = [
    {
      image: './assets/projects/hrms/desktop/LOGIN.jpg',
      thumbImage: './assets/projects/hrms/desktop/LOGIN.jpg',
      alt: 'alt of image',
      title: 'Login',
      order: 1,
    },
    {
      image: './assets/projects/hrms/desktop/Dashboard.png', // Support base64 image
      thumbImage: './assets/projects/hrms/desktop/Dashboard.png', // Support base64 image
      title: 'Dashboard', //Optional: You can use this key if want to show image with title
      alt: 'Image alt', //Optional: You can use this key if want to show image with alt
      order: 2, //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
    },
    {
      image: './assets/projects/hrms/desktop/Leave.png',
      thumbImage: './assets/projects/hrms/desktop/Leave.png',
      title: 'Leaves',
      alt: 'Image alt',
      order: 3,
    },
    {
      image: './assets/projects/hrms/desktop/project.png',
      thumbImage: './assets/projects/hrms/desktop/project.png',
      title: 'Wagon Form',
      alt: 'Image alt',
      order: 4,
    },

  ];

  logos1: string[] = [
    './assets/tech/netcore.png',
    './assets/tech/c-sharp.png',
    './assets/tech/mysql.png',
    './assets/tech/winforms.png',
  ];
}
