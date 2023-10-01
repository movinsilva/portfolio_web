import { Component } from '@angular/core';

@Component({
  selector: 'app-travelgo-admin',
  templateUrl: './travelgo-admin.component.html',
  styleUrls: ['./travelgo-admin.component.css']
})
export class TravelgoAdminComponent {
  images: string[] = [
    './assets/tech/java.png',
    './assets/tech/python.png',
    './assets/tech/c.png',
    // Add more image URLs as needed
  ];

  imageObject: Array<object> = [
    {
      image: './assets/projects/travelgo/admin/dashboard.png',
      thumbImage: './assets/projects/travelgo/admin/dashboard.png',
      alt: 'alt of image',
      title: 'Dashboard',
      order: 1,
    },
    {
      image: './assets/projects/travelgo/admin/train_schedule.png', // Support base64 image
      thumbImage: './assets/projects/travelgo/admin/train_schedule.png', // Support base64 image
      title: 'Train Schedule', //Optional: You can use this key if want to show image with title
      alt: 'Image alt', //Optional: You can use this key if want to show image with alt
      order: 2, //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
    },
    {
      image: './assets/projects/travelgo/admin/add_schedule.png',
      thumbImage: './assets/projects/travelgo/admin/add_schedule.png',
      title: 'Train Schedule Form',
      alt: 'Image alt',
      order: 3,
    },
    {
      image: './assets/projects/travelgo/admin/add_wagon.png',
      thumbImage: './assets/projects/travelgo/admin/add_wagon.png',
      title: 'Wagon Form',
      alt: 'Image alt',
      order: 4,
    },
    {
      image: './assets/projects/travelgo/admin/overview.png',
      thumbImage: './assets/projects/travelgo/admin/overview.png',
      title: 'Sales overview',
      alt: 'Image alt',
      order: 5,
    },
    {
      image: './assets/projects/travelgo/admin/sales.png',
      thumbImage: './assets/projects/travelgo/admin/sales.png',
      title: 'Sales',
      alt: 'Image alt',
      order: 6,
    },
    {
      image: './assets/projects/travelgo/admin/breakdown.png',
      thumbImage: './assets/projects/travelgo/admin/breakdown.png',
      title: 'Sales breakdown',
      alt: 'Image alt',
      order: 7,
    },
    {
      image: './assets/projects/travelgo/admin/dashboard-light.png',
      thumbImage: './assets/projects/travelgo/admin/dashboard-light.png',
      title: 'Dashboard Light mode',
      alt: 'Image alt',
      order: 7,
    },
  ];

  logos1: string[] = [
    './assets/tech/react.png',
    './assets/tech/html.png',
    './assets/tech/css.png',
    './assets/tech/js.png',
    './assets/tech/mui.png',
    './assets/tech/redux.png',
  ];
}
